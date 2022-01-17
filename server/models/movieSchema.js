const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  adult: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  homepage: {
    type: String,
  },
  genres: {
    type: Array,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  original_language: {
    type: String,
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
  production_companies: {
    type: Array,
    default: [
      {
        name: String,
        origin_country: String,
      },
    ],
  },
});

module.exports = mongoose.model("Movie", movieSchema);
