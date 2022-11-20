const AppError = require('../utils/AppError');
const catchError = require('../utils/catchError');
const TestimonialModel = require('../models/TestimonialModel');

module.exports = catchError(async (req, res) => {
  const data = await TestimonialModel.find({});

  const results = data.length;
  if (results === 0) throw new AppError(404, 'Data not found.');

  res.status(200).json({
    status: 'success',
    results,
    data,
  });
});
