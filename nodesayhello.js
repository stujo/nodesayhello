console.log('Hello World Loading');

var PORT_NUMBER = 3000;
if (process.env.PORT) {
  PORT_NUMBER = parseInt(process.env.PORT);
}

// Load Express Module
var express = require('express');

// Create the App
var app = express();

var img_path = "nodesayhello.png";

// Set up root route
app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(200, '<html><body>Hello World <img src="' + img_path + '"/></body></html>');
});


// Serve Static Files from public folder
app.use(express.static(__dirname + '/public'));

// Start the Server
var server = app.listen(PORT_NUMBER, function () {
  console.log('Listening on port %d', server.address().port);
});

