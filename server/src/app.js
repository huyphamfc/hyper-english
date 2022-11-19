const dotenv = require('dotenv');
const morgan = require('morgan');
const express = require('express');

const AppError = require('./utils/AppError');
const handleGlobalError = require('./controllers/globalErrorController');
const aboutRouter = require('./routers/aboutRouter');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/public', express.static('public'));

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/about', aboutRouter);

app.all('*', (req, res, next) => {
  next(new AppError(404, `Cannot find ${req.originalUrl} on the server.`));
});

app.use(handleGlobalError);

module.exports = app;
