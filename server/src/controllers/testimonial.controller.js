const TestimonialModel = require('../models/testimonial.model');
const sendDataToClient = require('../utils/sendData');
const catchAsyncError = require('../utils/catchAsyncError');

const getTestimonials = catchAsyncError(async (req, res) => {
  await sendDataToClient(res, TestimonialModel);
});

module.exports = getTestimonials;
