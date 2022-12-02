const express = require('express');

const lessonController = require('../controllers/lessonController');

const lessonRouter = express.Router();
lessonRouter.get('/', lessonController);

module.exports = lessonRouter;
