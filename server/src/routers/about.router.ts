import express from 'express';

import { getAbout } from '../controllers';

const aboutRouter = express.Router();
aboutRouter.get('/', getAbout);

export default aboutRouter;
