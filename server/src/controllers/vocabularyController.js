const AppError = require('../utils/AppError');
const catchError = require('../utils/catchError');

const VocabularyModel = require('../models/VocabularyModel');

module.exports = catchError(async (req, res) => {
  const { lesson } = req.params;
  const vocabulary = await VocabularyModel.findOne({ lesson });

  if (!vocabulary) throw new AppError(404, 'Data not found.');

  res.status(200).json({
    status: 'success',
    content: vocabulary.content,
  });
});
