import { LessonModel } from '../models';
import { sendDataToClient, catchAsyncError, AppError } from '../utils';

const getAllLessons = catchAsyncError(async (req, res) => {
  await sendDataToClient(res, LessonModel);
});

const getVocabularyByLessonNumber = catchAsyncError(async (req, res) => {
  const { lessonNumber } = req.params;

  const lesson = await LessonModel.findOne({ lessonNumber }).select('+vocabulary');
  if (!lesson) throw new AppError(404, 'Data not found.');

  const { vocabulary } = lesson;

  res.status(200).json({
    status: 'success',
    vocabulary,
  });
});

export default { getAllLessons, getVocabularyByLessonNumber };
