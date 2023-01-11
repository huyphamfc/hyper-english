import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

export default app;
