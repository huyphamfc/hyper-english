const MissionModel = require('../models/mission.model');
const sendDataToClient = require('../utils/sendData');
const catchAsyncError = require('../utils/catchAsyncError');

const getMissions = catchAsyncError(async (req, res) => {
  await sendDataToClient(res, MissionModel);
});

module.exports = getMissions;
