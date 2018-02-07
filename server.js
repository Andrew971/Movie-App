const express = require('express');
const app = express();
const port = process.argv[2] || 8080;
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { movies: getMovies() });
});


app.get('/movie/:movieId', (req, res) => {
  let movie = getMovies();
  let id = req.params.movieId
  // res.send(movie[id])
  res.render('movie', { movie: getMovies(), id })
})

app.get('/search', (req, res) => {
  let movies = getMovies();
  let search = req.query['searchTerm'].toUpperCase()
  let results= movies.filter((movie) => {
    return movie.title.toUpperCase().includes(search);
  });

  res.render('index', { movies:results });

})


function getMovies() {
    return [
      {
        title: 'Blade Runner',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong',
        img: '/img/movie-img.jpg',
        id: '0'
      },
      {
        title: 'LoL',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong',
        img: '/img/movie-img.jpg',
        id: '1'
      },
      {
        title: 'LoL1',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong',
        img: '/img/movie-img.jpg',
        id: '1'
      }
    ]
  }

app.listen(port, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
  })