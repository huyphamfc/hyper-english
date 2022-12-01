const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const AppError = require('./utils/AppError');
const handleGlobalError = require('./controllers/globalErrorController');
const aboutRouter = require('./routers/aboutRouter');
const missionRouter = require('./routers/missionRouter');
const productRouter = require('./routers/productRouter');
const testimonialRouter = require('./routers/testimonialRouter');
const vocabularyRouter = require('./routers/vocabularyRouter');
const userRouter = require('./routers/userRouter');

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/public', express.static('public'));

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/about', aboutRouter);
app.use('/api/missions', missionRouter);
app.use('/api/products', productRouter);
app.use('/api/testimonials', testimonialRouter);
app.use('/api/vocabulary/lesson/', vocabularyRouter);
app.use('/api/user', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(404, `Cannot find ${req.originalUrl} on the server.`));
});

app.use(handleGlobalError);

module.exports = app;
