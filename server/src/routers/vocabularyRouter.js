const express = require('express');

const authController = require('../controllers/authController');
const vocabularyController = require('../controllers/vocabularyController');

const vocabularyRouter = express.Router();
vocabularyRouter.get(
  '/:lesson',
  authController.protectRoute,
  vocabularyController,
);

module.exports = vocabularyRouter;
