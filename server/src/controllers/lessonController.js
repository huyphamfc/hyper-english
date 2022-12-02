const AppError = require('../utils/AppError');
const catchError = require('../utils/catchError');

const LessonModel = require('../models/LessonModel');

module.exports = catchError(async (req, res) => {
  const data = await LessonModel.find({});

  const results = data.length;
  if (results === 0) throw new AppError(404, 'Data not found.');

  res.status(200).json({
    status: 'success',
    results,
    data,
  });
});
