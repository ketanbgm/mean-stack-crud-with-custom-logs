function deleteUser(req, res) {
	// body...
	var user = require('../models/user.js')
	var id = req.params.id;
	user.remove({'_id':id}, function(err, data){
		if(err){
			console.log(err)
		} else {
			res.status(200).send("user deleted")
			
			
		}
	})
}

module.exports = deleteUser;