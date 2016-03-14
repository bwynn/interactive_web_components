// PACKAGES
//==============================================================================
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('./models/word_model'); // get word model info
var app = express();

// CONFIGURATION
//==============================================================================
var db = mongoose.connect('mongodb://localhost/words');
var port = process.env.PORT || 8080;

app.use(bodyParser());

// set static files location
app.use(express.static(__dirname + '/public'));

// ROUTES
//==============================================================================
require('./routes')(app);

// SERVER
//==============================================================================
app.listen(port);

console.log("Server fired up and running on port " + port);

exports = module.exports = app;
