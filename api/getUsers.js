function getUsers(req, res){
	var Users = require('../models/user.js')
	Users.find({}, function(err, users){
		if(err){
			console.log(err)
		} else{
			res.status(200).send(users);
		}
	})
}

module.exports = getUsers;