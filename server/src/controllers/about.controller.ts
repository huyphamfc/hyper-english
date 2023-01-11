import { AboutModel } from '../models';
import { sendDataToClient, catchAsyncError } from '../utils';

export default catchAsyncError(async (req, res) => {
  await sendDataToClient(res, AboutModel);
});
