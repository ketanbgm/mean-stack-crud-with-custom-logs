function addEmp(req, res) {
	// body...
	var emp = require('../models/employee.js');
	var empData = new emp(req.body);

	empData.save(function (err, empData){
		if(err){
			console.log(err)
		} else{
			res.status(200).send('success');
		}
	})
}

module.exports = addEmp;