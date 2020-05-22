const mongoose = require('mongoose');

const ExperienceSchema = mongoose.Schema({
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Experience', ExperienceSchema);