const jwt = require('jsonwebtoken');

const { JWT_PRIVATE_KEY } = require('../config/env.config');
const UserModel = require('../models/user.model');
const sendCookieToClient = require('../utils/sendCookie');
const AppError = require('../utils/AppError');
const catchAsyncError = require('../utils/catchAsyncError');

const signup = catchAsyncError(async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = await UserModel.create({ username, email, password });
  sendCookieToClient(newUser, req, res);
});

const login = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).select('+password');
  if (!user) throw new AppError(401, 'Your email or password is incorrect.');

  const isPasswordCorrect = await user.checkPassword(password);
  if (!isPasswordCorrect)
    throw new AppError(401, 'Your email or password is incorrect.');

  sendCookieToClient(user, req, res);
});

const logout = catchAsyncError(async (req, res) => {
  res.clearCookie('jwt');

  res.status(200).json({
    status: 'success',
    message: 'Logged out.',
  });
});

const protectRoute = catchAsyncError(async (req, res, next) => {
  const token = req.cookies?.jwt;
  if (!token) throw new AppError(401, 'Please login to access.');

  const decodedToken = jwt.verify(token, JWT_PRIVATE_KEY);
  if (typeof decodedToken === 'string')
    throw new AppError(401, 'Signature is invalid.');

  const user = await UserModel.findById(decodedToken.id);
  if (!user)
    throw new AppError(
      401,
      'The account no longer exists. Please login again.',
    );

  const isTokenExpire = user.isPasswordChange(decodedToken.iat ?? 0);
  if (isTokenExpire)
    throw new AppError(401, 'The password has changed. Please log in again.');

  next();
});

module.exports = { signup, login, logout, protectRoute };
