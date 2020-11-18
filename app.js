var express = require('express');
const db = require("./controllers/db/db");
db();

var todoController = require('./controllers/todoController');

var app = express();

// set up template engine

app.set('view engine', 'ejs');

// static files

app.use(express.static('./public'));

// fire controllers

todoController(app);

// listen to port
   
app.listen(3000);

console.log('you are listening to port 3000');
