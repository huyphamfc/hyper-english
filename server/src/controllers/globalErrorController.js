const AppError = require('../utils/AppError');

const sendErrDev = (err, res) => {
  console.error(err);

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrProd = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

const handleJWTErr = () =>
  new AppError(401, 'Invalid signature. Please log in again!');

module.exports = (err, req, res, next) => {
  let processedErr = Object.assign(err);
  processedErr.statusCode = processedErr.statusCode || 500;
  processedErr.status = processedErr.status || 'error';
  processedErr.message = processedErr.message || 'Something went wrong!';

  const environment = process.env.NODE_ENV;

  switch (environment) {
    case 'development':
      sendErrDev(processedErr, res);
      break;
    case 'production':
      if (processedErr.name === 'JsonWebTokenError') {
        processedErr = handleJWTErr();
      }

      sendErrProd(processedErr, res);
      break;

    default:
  }
};
