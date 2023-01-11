import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { aboutRouter, missionRouter, testimonialRouter, lessonRouter, userRouter } from './routers';
import { handleUnhandledRoute, handleGlobalError } from './middleware';

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};
app.use(cors(corsOptions));

app.use('/api', express.static('public'));

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/about', aboutRouter);
app.use('/api/missions', missionRouter);
app.use('/api/testimonials', testimonialRouter);
app.use('/api/lessons', lessonRouter);
app.use('/api/user', userRouter);

app.all('*', handleUnhandledRoute);

app.use(handleGlobalError);

export default app;
