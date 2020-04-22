const db = require('../config/db.config');
const jwt = require('jsonwebtoken');
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
exports.signin = (req, res) => {
	console.log("Sign-In");
	
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send('User Not Found.');
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}
		
		const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET || "Tokenimage", {
		  expiresIn: 86400 // expires in 24 hours
		});
		user.password = undefined;
		res.status(200).send({user, token:token});
		
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}



