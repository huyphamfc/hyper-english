const LessonModel = require('../models/lesson.model');
const sendDataToClient = require('../utils/sendData');
const AppError = require('../utils/AppError');
const catchAsyncError = require('../utils/catchAsyncError');

const getAllLessons = catchAsyncError(async (req, res) => {
  await sendDataToClient(res, LessonModel);
});

const getVocabularyByLessonNumber = catchAsyncError(async (req, res) => {
  const { lessonNumber } = req.params;

  const lesson = await LessonModel.findOne({ lessonNumber }).select(
    '+vocabulary',
  );
  if (!lesson) throw new AppError(404, 'Data not found.');

  const { vocabulary } = lesson;

  res.status(200).json({
    status: 'success',
    vocabulary,
  });
});

module.exports = { getAllLessons, getVocabularyByLessonNumber };
