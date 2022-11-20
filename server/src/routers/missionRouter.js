const express = require('express');

const missionController = require('../controllers/missionController');

const missionRouter = express.Router();
missionRouter.get('/', missionController);

module.exports = missionRouter;
