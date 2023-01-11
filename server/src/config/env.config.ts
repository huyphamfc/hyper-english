import dotenv from 'dotenv';

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';

export const PORT = process.env.PORT || '8000';

export const MONGODB_URI = process.env.MONGODB_URI || ' ';

export const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || 'code_is_easy';
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1m';

export const COOKIE_EXPIRATION = process.env.COOKIE_EXPIRATION || '1';
