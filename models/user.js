var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: String,
	created_date : Date
})

var User = mongoose.model('User', userSchema);
module.exports = User;