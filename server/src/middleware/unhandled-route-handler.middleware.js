const AppError = require('../utils/AppError');

const handleUnhandledRoute = (req, res, next) => {
  next(new AppError(404, `Cannot find ${req.originalUrl} on the server.`));
};

module.exports = handleUnhandledRoute;
