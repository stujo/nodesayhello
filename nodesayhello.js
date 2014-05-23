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

var loaded_modules = '';

Object.keys(require('module')._cache).forEach(function (m) {
  loaded_modules += '<option>' + m + '</option>';
});

// Set up root route
app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(200, '<html><body><div><h1>Hello World</h1><select>' + loaded_modules + '</select></div><div><img src="' + img_path + '"/></div></body></html>');
});


// Serve Static Files from public folder
app.use(express.static(__dirname + '/public'));

// Start the Server
var server = app.listen(PORT_NUMBER, function () {
  console.log('Listening on port %d', server.address().port);
});