var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var empSchema = new Schema({
	'name': String,
	'mobile': Number,
	'created_date': Date
})

var Emp = mongoose.model('Emp', empSchema);
module.exports = Emp;