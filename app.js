/**
 * Module dependencies
 */

var express = require('express')
  , path = require('path')
  , fs = require('fs')
;

// create express app
var app = express();




// configure express stuff
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// custom middleware
app.use(function(req, res, next) {
    console.log('Time: %d; Route: %s', Date.now(), req.url);
    next();
});


// dynamically include routes
fs.readdirSync('./routes').forEach(function(file) {
    if(file.substr(-3) === '.js') {
	var router = express.Router();
	var prefix = file.substring(0, file.length-3);
	var thisRouter = require('./routes/' + prefix);
	console.log(prefix);
	app.use('/' + prefix, require('./routes/'+ prefix)(router));

    }
});



var port = process.env.PORT || 3000;

// START SERVER
// ======================================
app.listen(port);
console.log('listening on port ' + port);
