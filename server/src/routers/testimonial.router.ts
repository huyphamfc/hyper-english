import express from 'express';

import { getTestimonials } from '../controllers';

const testimonialRouter = express.Router();
testimonialRouter.route('/').get(getTestimonials);

export default testimonialRouter;
