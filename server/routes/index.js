const express = require("express");
const router = express.Router();
const controller = require("../controllers/movie");

// routes
router.get("/api/movies/", controller.filmList);

module.exports = router;
