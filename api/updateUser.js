function updateUser(req, res) {
	// body...
	var id  = req.params.id;
	var data = req.body;
	var User = require('../models/user.js');
	User.update({'_id':id},data, {safe:true},  function(err, user){
		if(err){
			console.log(err);
		} else{
			res.status(200).send(user);
		}
	})
}
module.exports = updateUser;
