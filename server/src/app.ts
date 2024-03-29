import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import { aboutRouter, missionRouter, testimonialRouter, lessonRouter, userRouter } from './routers';
import { handleUnhandledRoute, handleGlobalError } from './middleware';

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

export default app;
