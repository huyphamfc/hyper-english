import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import { aboutRouter } from './routers';
import { handleUnhandledRoute, handleGlobalError } from './middleware';

dotenv.config();

const app = express();

app.use('/api', express.static('public'));

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/about', aboutRouter);

app.all('*', handleUnhandledRoute);

app.use(handleGlobalError);

export default app;
