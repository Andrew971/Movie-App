const express = require('express');
const app = express();
const port = process.argv[2] || 8080;
const index = require('./routes/index')



app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', index)





app.listen(port, () => {
  console.log('Server Started on http://localhost:8080');
  console.log('Press CTRL + C to stop server');
})