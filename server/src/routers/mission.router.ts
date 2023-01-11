import express from 'express';

import { getMissions } from '../controllers';

const missionRouter = express.Router();
missionRouter.route('/').get(getMissions);

export default missionRouter;
