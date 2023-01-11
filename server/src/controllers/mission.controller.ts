import { MissionModel } from '../models';
import { sendDataToClient, catchAsyncError } from '../utils';

const getMissions = catchAsyncError(async (req, res) => {
  await sendDataToClient(res, MissionModel);
});

export default getMissions;
