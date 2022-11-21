const express = require('express');

const vocabularyController = require('../controllers/vocabularyController');

const vocabularyRouter = express.Router();
vocabularyRouter.get('/:lesson', vocabularyController);

module.exports = vocabularyRouter;
