"use strict";

require('colors');

var express 	= require('express'),
	bodyParser  = require('body-parser'),
	http        = require('http'),
	Path        = require('path'),
	serveStatic = require('serve-static'),
	api 		= require('./server/api');

	var app = express();
	var server = http.createServer(app);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.get('/server/status', api.getStatus);

	server.listen(3000, function() {
		console.log('✔︎︎ Express server listening on http://localhost:3000/'.green);
	});
