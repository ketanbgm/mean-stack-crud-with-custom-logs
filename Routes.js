'use strict'
module.exports = routes;

function routes(app) {
	// body...
	app.post('/addUser', require('./api/addUser.js'));
	app.get('/getUsers', require('./api/getUsers.js'));  
	app.put('/updateUser/:id', require('./api/updateUser.js'));
	app.delete('/deleteUser/:id', require('./api/deleteUser.js'));
}