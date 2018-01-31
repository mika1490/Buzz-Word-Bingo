const express = require('express');
const bodyParser = require('body-parser');
const buzzwords = require('./routes/buzzwords');

const PORT = 3000;
const app = express();
const router = express.Router();

//allows you to use body 
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + 'public'));

app.use('/buzzwords', buzzwords);

app.listen(PORT, (err) => {
  if(err) { throw err; }
  console.log(`Server listening on port ${PORT}`)
});

