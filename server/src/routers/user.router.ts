import express from 'express';

import { authController } from '../controllers';

const userRouter = express.Router();
userRouter.route('/signup').post(authController.signup);
userRouter.route('/login').post(authController.login);
userRouter.route('/logout').get(authController.logout);

export default userRouter;
