import { TestimonialModel } from '../models';
import { sendDataToClient, catchAsyncError } from '../utils';

const getTestimonials = catchAsyncError(async (req, res) => {
  await sendDataToClient(res, TestimonialModel);
});

export default getTestimonials;
