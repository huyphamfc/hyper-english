const AboutModel = require('../models/about.model');
const sendDataToClient = require('../utils/sendData');
const catchAsyncError = require('../utils/catchAsyncError');

module.exports = catchAsyncError(async (req, res) => {
  await sendDataToClient(res, AboutModel);
});
