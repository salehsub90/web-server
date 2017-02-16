var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next) {	//next for access login
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next) {
		//new Date().toString
		console.log("Request:" + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};
app.use(middleware.logger);

//must be up top the first one in order to be used
//app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About US');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port # '+ PORT + '!');
});























































