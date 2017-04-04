function getUser(req, res) {
	var User = require('../models/user.js')
	User.find({}, function(err, user){
		if(err){
			console.log(err)
		} else{
			res.status(200).send(user);
		}
	})
}

module.exports = getUser;