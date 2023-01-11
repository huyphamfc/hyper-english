const express = require('express');

const getTestimonials = require('../controllers/testimonial.controller');

const testimonialRouter = express.Router();
testimonialRouter.route('/').get(getTestimonials);

module.exports = testimonialRouter;
