const express = require('express');

const testimonialController = require('../controllers/testimonialController');

const testimonialRouter = express.Router();
testimonialRouter.get('/', testimonialController);

module.exports = testimonialRouter;
