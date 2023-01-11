const express = require('express');

const getMissions = require('../controllers/mission.controller');

const missionRouter = express.Router();
missionRouter.route('/').get(getMissions);

module.exports = missionRouter;
