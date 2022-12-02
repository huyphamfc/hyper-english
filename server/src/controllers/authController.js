/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');

const AppError = require('../utils/AppError');
const catchError = require('../utils/catchError');
const UserModel = require('../models/UserModel');

const responseToClient = (req, res, statusCode, user) => {
  // prettier-ignore
  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: process.env.JWT_EXPIRATION },
  );

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    sameSite: 'none',
  });

  res.status(statusCode).json({
    status: 'success',
    data: {
      name: user.name,
      email: user.email,
    },
  });
};

exports.signup = catchError(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.create({ name, email, password });

  responseToClient(req, res, 201, user);
});

exports.login = catchError(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).select('+password');
  if (!user) throw new AppError(401, 'Your email or password is incorrect.');

  const isPasswordCorrect = await user.verifyPassword(password, user.password);
  if (!isPasswordCorrect) {
    throw new AppError(401, 'Your email or password is incorrect.');
  }

  responseToClient(req, res, 200, user);
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
