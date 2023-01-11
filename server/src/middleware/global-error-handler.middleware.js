const { NODE_ENV } = require('../config/env.config');
const AppError = require('../utils/AppError');

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

const handleDuplicatedFieldError = (err) => {
  const value = Object.values(err.keyValue);
  return new AppError(400, `${value} already exists.`);
};

const handleJWTError = () => {
  return new AppError(401, 'Invalid Signature. Please login again.');
};

const handleTokenExpiredError = () => {
  return new AppError(401, 'Expired Permission. Please login again.');
};

const handleCastError = (err) => {
  const message = `${err.value} is invalid.`;
  return new AppError(400, message);
};

const handleGlobalError = (err, req, res, next) => {
  let processedError = Object.assign(err);
  processedError.statusCode = processedError.statusCode || 500;
  processedError.status = processedError.status || 'error';
  processedError.message = processedError.message || 'Something went wrong!';

  switch (NODE_ENV) {
    case 'development':
      sendErrorDev(processedError, res);
      break;
    case 'production':
      if (processedError.code === 11000) {
        processedError = handleDuplicatedFieldError(processedError);
      }

      if (processedError.name === 'JsonWebTokenError') {
        processedError = handleJWTError();
      }

      if (processedError.name === 'TokenExpiredError') {
        processedError = handleTokenExpiredError();
      }

      if (processedError.name === 'CastError') {
        processedError = handleCastError(processedError);
      }

      sendErrorProd(processedError, res);
      break;

    default:
  }

  next();
};

module.exports = handleGlobalError;
