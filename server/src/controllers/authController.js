/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');

const AppError = require('../utils/AppError');
const catchError = require('../utils/catchError');
const UserModel = require('../models/UserModel');

// prettier-ignore
const signJWT = (id) => jwt.sign(
  { id },
  process.env.JWT_PRIVATE_KEY,
  { expiresIn: process.env.JWT_EXPIRATION },
);

const sendCookie = (req, res, token) => {
  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    sameSite: 'none',
  });
};

exports.signup = catchError(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.create({ name, email, password });

  const token = signJWT(user._id);

  sendCookie(req, res, token);

  res.status(201).json({ status: 'success' });
});

exports.login = catchError(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).select('+password');
  if (!user) throw new AppError(401, 'Your email or password is incorrect.');

  const isPasswordCorrect = await user.verifyPassword(password, user.password);
  if (!isPasswordCorrect) {
    throw new AppError(401, 'Your email or password is incorrect.');
  }

  const token = signJWT(user._id);

  sendCookie(req, res, token);

  res.status(200).json({ status: 'success' });
});

exports.logout = (req, res) => {
  res.cookie('jwt', '', {
    expires: new Date(1),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    sameSite: 'none',
  });

  res.status(200).json({ status: 'success' });
};
