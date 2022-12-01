/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');

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
