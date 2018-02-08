const express = require('express');
const app = express();
const port = process.argv[2] || 8080;
const fs = require('fs')
const data = fs.readFileSync('data-movie.json', 'utf8')
let movies= JSON.parse(data)

function SaveBlogs(){
  fs.writeFile('data-movie', JSON.stringify(movies), (err)=>{
      if(err) console.log(err)
  })
}
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  let message = "";
  res.render('index', { movies: movies, message });
});


app.get('/movie/:movieId', (req, res, ) => {
  let id = req.params.movieId
  let found = movies.find(function (movie) {
    return movie.id.toUpperCase().includes(id);
  })

  res.render('movie', { movie: found, id })
})

app.get('/search', (req, res) => {
  let search = req.query['searchTerm'].toUpperCase()
  let results = movies.filter((movie) => {
    return movie.title.toUpperCase().includes(search);
  });
  function NoMovie() {

    if (results.length == 0) {
      return "No movies found"
    } else {
      return ""
    }
  }
  let message = NoMovie()
  res.render('index', { movies: results, message });
})

app.listen(port, () => {
  console.log('Server Started on http://localhost:8080');
  console.log('Press CTRL + C to stop server');
})