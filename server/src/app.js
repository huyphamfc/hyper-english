const dotenv = require('dotenv');
const morgan = require('morgan');
const express = require('express');

dotenv.config();

const app = express();

app.use(express());

app.use('/api/public', express.static('public'));

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello from the server!',
  });
});

module.exports = app;
