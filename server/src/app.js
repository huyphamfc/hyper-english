const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const aboutRouter = require('./routers/about.router');
const missionRouter = require('./routers/mission.router');
const testimonialRouter = require('./routers/testimonial.router');
const lessonRouter = require('./routers/lesson.router');
const userRouter = require('./routers/user.router');

const handleUnhandledRoute = require('./middleware/unhandled-route-handler.middleware');
const handleGlobalError = require('./middleware/global-error-handler.middleware');

dotenv.config();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

const helmetOptions = {
  crossOriginResourcePolicy: false,
};

const app = express();

app.use(cors(corsOptions));

app.use(helmet(helmetOptions));

app.use('/api', express.static('public'));

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json({ limit: '10kb' }));

app.use(cookieParser());

app.use('/api/about', aboutRouter);
app.use('/api/missions', missionRouter);
app.use('/api/testimonials', testimonialRouter);
app.use('/api/lessons', lessonRouter);
app.use('/api/user', userRouter);

app.all('*', handleUnhandledRoute);

app.use(handleGlobalError);

module.exports = app;
