console.log('Hello World Loading');

var PORT_NUMBER = 3000;
if (process.env.PORT) {
  PORT_NUMBER = parseInt(process.env.PORT);
}

// Load Express Module
var express = require('express');

// Create the App
var app = express();


// Set up root route
app.get('/', function (req, res) {
  res.send('Hello World');
});

// Start the Server
var server = app.listen(PORT_NUMBER, function () {
  console.log('Listening on port %d', server.address().port);
});

