const express = require('express');

const aboutController = require('../controllers/aboutController');

const aboutRouter = express();
aboutRouter.get('/', aboutController);

module.exports = aboutRouter;
