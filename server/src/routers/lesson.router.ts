import express from 'express';

import { lessonController, authController } from '../controllers';

const lessonRouter = express.Router();
lessonRouter.route('/').get(lessonController.getAllLessons);
lessonRouter
  .route('/:lessonNumber')
  .get(authController.protectRoute, lessonController.getVocabularyByLessonNumber);

export default lessonRouter;
