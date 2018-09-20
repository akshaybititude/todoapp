const express = require('express');
const bodyParser = require('body-parser');
const todo = require('./todo');
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Hi there");
});

app.use('/api/todo', todo);

app.listen(6069, () => {
  console.log("Your server running in port 6069");
});