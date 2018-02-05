const express = require('express');
const app = express();
const port= process.argv[2] || 8080;


app.listen(port, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
  });