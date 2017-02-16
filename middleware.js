// Use module exports to expose middleware
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

module.exports = middleware;