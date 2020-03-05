const express = require("express");
const router = express.Router();
const Movie = require("../models/Movies.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  // import movie schema then Movie.find().then(allMoviesArrRes => res.render(movies/movies, {allMoviesArrRes}))
  Movie.find()
  .then((allMoviesArrRes) => {
    res.render("movies/movies", {allMoviesArrRes});
  })
  .catch((error) => {
    console.log(error);
  })
});

/* GET movie's detail page */
router.get('/movie/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
  .then(theMovie => {
    res.render('movies/movie-info', {theMovie});
  })
  .catch( err => console.log(`Error while getting movie's details ${err}`) )
})

module.exports = router;
