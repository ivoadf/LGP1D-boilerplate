var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// REGISTER OUR ROUTES
app.use('/api/ex', require('./routes/ex'));

// START THE SERVER
app.listen(port);
console.log('Server open on port: ' + port);
