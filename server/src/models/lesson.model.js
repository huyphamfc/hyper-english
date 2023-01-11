const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  lessonNumber: {
    type: Number,
    unique: true,
  },
  title: String,
  bgColor: String,
  imgSrc: String,
  imgAlt: String,
  vocabulary: {
    type: [
      {
        word: String,
        pronunciation: String,
        meaning: String,
        example: String,
      },
    ],
    select: false,
  },
});

const LessonModel = mongoose.model('Lesson', lessonSchema);

module.exports = LessonModel;
