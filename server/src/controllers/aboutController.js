const AppError = require('../utils/AppError');
const catchError = require('../utils/catchError');
const AboutModel = require('../models/AboutModel');

module.exports = catchError(async (req, res) => {
  const data = await AboutModel.find({});

  const results = data.length;
  if (results === 0) throw new AppError(404, 'Data not found.');

  res.status(200).json({
    status: 'success',
    results,
    data,
  });
});
