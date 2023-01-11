import express from 'express';

import { lessonController } from '../controllers';

const lessonRouter = express.Router();
lessonRouter.route('/').get(lessonController.getAllLessons);
lessonRouter.route('/:lessonNumber').get(lessonController.getVocabularyByLessonNumber);

export default lessonRouter;
