const express = require("express");
const router = express.Router();
const controller = require("../controllers/movie");

// routes
router.get("/api/movies/", controller.movieList);
router.post("/api/movies/", controller.insertSingleMovie);
router.patch("/api/movies/:id", controller.updateSingleMovie);
router.delete("/api/movies/:id", controller.deleteSingleMovie);

module.exports = router;
