const sendErrDev = (err, res) => {
  console.error(err);

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = (err, req, res, next) => {
  const processedErr = Object.assign(err);
  processedErr.statusCode = processedErr.statusCode || 500;
  processedErr.status = processedErr.status || 'error';
  processedErr.message = processedErr.message || 'Something went wrong!';

  const environment = process.env.NODE_ENV;

  switch (environment) {
    case 'development':
      sendErrDev(processedErr, res);
      break;

    default:
  }
};
