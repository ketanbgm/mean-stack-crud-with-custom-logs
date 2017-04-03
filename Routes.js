'use strict'
module.exports = routes;

function routes(app) {
	// body...
	app.use('/addUser', require('./api/addUser.js'));
	app.use('/getUsers', require('./api/getUsers.js'));
	app.use('/addEmp', require('./api/addEmp.js'))
}