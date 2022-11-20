const express = require('express');

const missionController = require('../controllers/missionController');

const missionRouter = express();
missionRouter.get('/', missionController);

module.exports = missionRouter;
