const express = require('express')
const router = express.Router()
const request = require('request');


request('https://api.themoviedb.org/3/discover/movie?api_key=c254f174e3ef7bd559ed74294ff10031&language=en-US', (err, res, body) => {
  let data = JSON.parse(body)
  let movies = data.results
  

  router.get('/', (req, res) => {
    let message = "";
    res.render('index', {
      movies: movies,
      message: message
    });
  })


  router.get('/movie/:movieId', (req, res, err) => {
    let {movieId} = req.params
    let found = movies.find(function (movie) {
      if (movie.id == movieId)
        return movie;
    })
    res.render('movie', {movie: found});

    if(err){
      res.render('error')
    }

  })

  router.get('/search', (req, res) => {
    let search = req.query['searchTerm'].toUpperCase()
    let results = movies.filter((movie) => {
      return movie.title.toUpperCase().includes(search);
    });

    function NoMovie() {
      if (results.length == 0) {
        return "OOOuups !! No movies was found...";
      } else {
        if(results.length>1)
        return `${results.length} movies were found`
        else {
          return `${results.length} movie was found`

        }
      }
    }
    let message = NoMovie()
    res.render('index', {
      movies: results,
      message: message
        });
  })


})
module.exports = router