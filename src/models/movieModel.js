const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  releaseYear: {
    type: Number
  },
  genres: {
    type: [String]
  },
  duration: {
    type: String
  },
  cast: [{
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "person",
  }],
  crew: [{
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "person",
  }],
}, {
  timestamps: true
}, );

const movieModel = new mongoose.model("movies", movieSchema);

module.exports = movieModel;