const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  lessonNumber: {
    type: Number,
    unique: true,
  },
  name: String,
});

const LessonModel = mongoose.model('Lesson', lessonSchema);

module.exports = LessonModel;
