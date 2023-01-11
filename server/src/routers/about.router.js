const express = require('express');

const getAbout = require('../controllers/about.controller');

const aboutRouter = express.Router();
aboutRouter.get('/', getAbout);

module.exports = aboutRouter;
