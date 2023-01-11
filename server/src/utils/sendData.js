const AppError = require('./AppError');

const sendData = async (res, model) => {
  const data = await model.find({});

  const results = data.length;
  if (results === 0) throw new AppError(404, 'Data not found.');

  res.status(200).json({
    status: 'success',
    results,
    data,
  });
};

module.exports = sendData;
