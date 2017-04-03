function postUser(req, res) {
	// body...
	var User = require('../models/user.js');
	var userData = new User(req.body);

	userData.save(function(err, userData){
		if(err){
			console.log(err)
		} else{
			res.status(200).send('success');
		}
	})
}

module.exports = postUser;