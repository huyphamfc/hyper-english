const mongoose = require('mongoose');

const vocabularySchema = new mongoose.Schema({
  lesson: {
    type: Number,
    unique: true,
  },
  content: [
    {
      vocabulary: String,
      pronunciation: String,
      meaning: String,
      example: String,
    },
  ],
});

const VocabularyModel = mongoose.model('vocabulary', vocabularySchema);

module.exports = VocabularyModel;
