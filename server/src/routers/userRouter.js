const express = require('express');

const authController = require('../controllers/authController');

const userRouter = express.Router();
userRouter.route('/signup').post(authController.signup);
userRouter.route('/login').post(authController.login);
userRouter.route('/logout').get(authController.logout);

module.exports = userRouter;
