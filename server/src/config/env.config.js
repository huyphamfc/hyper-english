const dotenv = require('dotenv');

dotenv.config();

exports.NODE_ENV = process.env.NODE_ENV || 'development';

exports.PORT = process.env.PORT || '8000';

exports.MONGODB_URI = process.env.MONGODB_URI || ' ';

exports.CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

exports.JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || 'code_is_easy';
exports.JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1m';

exports.COOKIE_EXPIRATION = process.env.COOKIE_EXPIRATION || '1';
