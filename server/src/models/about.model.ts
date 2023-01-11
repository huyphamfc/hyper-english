import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  index: {
    type: String,
    unique: true,
  },
  title: String,
  content: String,
  imgSrc: String,
  imgAlt: String,
});

const AboutModel = mongoose.model('About', aboutSchema);

export default AboutModel;
