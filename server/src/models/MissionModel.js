const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  title: String,
  content: String,
  iconSrc: String,
  iconAlt: String,
});

const MissionModel = mongoose.model('mission', missionSchema);

module.exports = MissionModel;
