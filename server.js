'use strict'
process.title = "crud"

global.util = require('util');
var async = require('async');
var winston = require('winston');
require('./helper/setUpLogs.js');

if(require.main === module){
	init()
}

process.on('uncaughtException',function(err){
	logger.error('error', "uncaught exception");
	//throw(err);
})

function init(argument){
	var wallet = {
		app : global.app,
		config :{
			apiPort : 8088
		}
	}
wallet.me = util.format('Crud_operation_%s',init.name)
	async.series([
			createExpressApp.bind(null, wallet),
			initializeMongoose.bind(null, wallet),
			startListening.bind(null, wallet),
			initializeRoutes.bind(null, wallet)
		],
		function(err){
			if(err){
				throw err;
			}
		}
		)

}
function createExpressApp(wallet, nextFunc){
	try{	
		var express = require('express');
		var app = express();
		app.use(require('body-parser').json());
	    app.use(require('body-parser').urlencoded({ extended: false }));
	    var http = require('http');
	    wallet.app = app;
	    return nextFunc()
	}
	catch(err){
		if(err){
			throw err;
		} else {
			winston.info('Hello again distributed logs');
		}
	}

}

function initializeMongoose(wallet, nextFunc){
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/crud');
	return nextFunc()
}

function startListening(wallet, nextFunc){
	var listenAddr = '0.0.0.0';
	var port = wallet.config.apiPort;
	wallet.httpInstance = wallet.app.listen(port, listenAddr, function(err){
		if(err){
			logger.error('error', "this won't be printed to the console");
		} else{
			logger.info('info', "server running");
			return nextFunc()
		}
	})
}

function initializeRoutes(wallet, nextFunc){
	try{
		require('./Routes.js')(wallet.app);
	}
	catch(err){
		throw err;
	}
	return nextFunc()
}

// function throwError(whoAmIssage, err) {
//     log.error(whoAmIssage);
//     log.error(err);
//     if (err.stack) log.error(err.stack);
//     setTimeout(function() {
//         process.exit();
//     }, 3000);
// }