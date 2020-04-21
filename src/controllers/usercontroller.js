const db = require('../config/db.config');
//const config = require('../config/');
const User = db.user;


var bcrypt = require('bcryptjs');

exports.home=(req, res)=>{
    res.send("Holaaaa Homeeeee")
}

exports.signup = (req, res) => {
	// Save User to Database
	console.log("Processing func -> SignUp");
	console.log("req>>>:  ",req.body)
	User.create({
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8)
	}).then(() => {
				res.send("User registered successfully!");
        }).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}




