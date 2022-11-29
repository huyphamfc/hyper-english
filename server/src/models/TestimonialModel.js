const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  author: String,
  quote: String,
  avatarSrc: String,
  avatarAlt: String,
});

const TestimonialModel = mongoose.model('Testimonial', testimonialSchema);

module.exports = TestimonialModel;
