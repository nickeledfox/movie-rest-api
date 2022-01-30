require("../models/db");
const Movie = require("../models/movieSchema");

// GET movie by query
exports.movieList = async (req, res) => {
  let { limit = 10, page = 1, category, q } = req.query;

  const limitRecords = parseInt(limit);
  const skip = (page - 1) * limit;

  let query = {};
  if (q) {
    query = { $text: { $search: q } };
  }
  if (category) query.genres = category;

  try {
    const movies = await Movie.find(query).limit(limitRecords).skip(skip);
    res.json({ page: page, limit: limitRecords, movies });
  } catch (err) {
    logMyErrors();
  }
};

// POST single moovie
exports.insertSingleMovie = async (req, res) => {
  const newMovie = new Movie({
    adult: false,
    title: req.body.title,
    description: req.body.description,
    homepage: req.body.homepage,
    genres: req.body.genres,
    thumbnail: req.body.thumbnail,
    original_language: req.body.original_language,
    runtime: req.body.runtime,
    production_companies: req.body.production_companies,
  });
  try {
    await newMovie.save();
    res.json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// PATCH (update) moovie by id
exports.updateSingleMovie = async (req, res) => {
  let ID = req.params.id;
  let title = req.body.title;

  try {
    const updateMovie = await Movie.updateOne({ _id: ID }, { title: title });
    res.json(updateMovie);
  } catch (error) {
    res.status(400).json({ message: err });
  }
};

// DELETE moovie by id
exports.deleteSingleMovie = async (req, res) => {
  let ID = req.params.id;

  try {
    const data = await Movie.deleteOne({ _id: ID });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: err });
  }
};

