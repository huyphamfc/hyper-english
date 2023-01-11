import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.use('/api', express.static('public'));

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

export default app;
