require("../models/db");
const Movie = require("../models/movieSchema");

// GET movies
exports.movieList = async (req, res) => {};

insertMovies = async () => {
  try {
    await Movie.insertMany([
      {
        adult: false,
        title: "Fight Club",
        description:
          'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        homepage: "http://www.foxmovies.com/movies/fight-club",
        genres: ["Drama", "Thriller"],
        thumbnail: "",
        original_language: "en",
        runtime: 139,
        production_companies: [
          { name: "Regency Enterprises", origin_country: "US" },
          { name: "Fox 2000 Pictures", origin_country: "US" },
          { name: "Taurus Film", origin_country: "DE" },
          { name: "Atman Entertainment", origin_country: "" },
          { name: "Knickerbocker Films", origin_country: "US" },
          { name: "20th Century Fox", origin_country: "US" },
          { name: "The Linson Company", origin_country: "US" },
          { iso_3166_1: "DE", name: "Germany" },
          { iso_3166_1: "US", name: "United States of America" },
        ],
      },
      {
        adult: false,
        title: "The Hours",
        description:
          "Story of three women searching for more potent, meaningful lives. Each is alive at a different time and place, all are linked by their yearnings and their fears. Their stories intertwine, and finally come together in a surprising, transcendent moment of shared recognition.",
        homepage: "http://www.foxmovies.com/movies/fight-club",
        genres: ["Drama"],
        thumbnail: "",
        original_language: "en",
        runtime: 114,
        production_companies: [
          { name: "Paramount", origin_country: "US" },
          { name: "Miramax", origin_country: "US" },
          { name: "Scott Rudin Productions", origin_country: "US" },
        ],
      },
      {
        adult: false,
        title: "Comedy",
        description:
          "A young Jewish American man endeavors—with the help of eccentric, distant relatives—to find the woman who saved his grandfather during World War II—in a Ukrainian village which was ultimately razed by the Nazis.",
        homepage: "http://wip.warnerbros.com/everythingisilluminated/",
        genres: ["Drama"],
        thumbnail: "",
        original_language: "en",
        runtime: 106,
        production_companies: [
          { name: "Stillking Films", origin_country: "CZ" },
          { name: "Warner Independent Pictures (WIP)", origin_country: "US" },
          { name: "Telegraph Films", origin_country: "" },
          { name: "Big Beach", origin_country: "US" },
          {},
        ],
      },
    ]);
  } catch (err) {
    console.log(err);
  }
};
insertMovies();
