const express = require('express');

const {
  getAllLessons,
  getVocabularyByLessonNumber,
} = require('../controllers/lesson.controller');
const { protectRoute } = require('../controllers/auth.controller');

const lessonRouter = express.Router();
lessonRouter.route('/').get(getAllLessons);
lessonRouter
  .route('/:lessonNumber')
  .get(protectRoute, getVocabularyByLessonNumber);

module.exports = lessonRouter;
