const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  index: String,
  title: String,
  content: String,
  imgSrc: String,
  imgAlt: String,
});

const AboutModel = mongoose.model('About', aboutSchema);

module.exports = AboutModel;
