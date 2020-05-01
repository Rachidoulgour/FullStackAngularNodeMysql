const db = require('../config/db.config');
const List = db.list;
exports.createList = (req, res) => {
	// Save User to Database
	console.log("Processing func -> SignUp");
	console.log("req>>>:  ",req.body)
	List.create({
        title: req.body.title,
        user_id: req.body.userid,
		done: false,
		
	}).then(() => {
				res.send("List created successfuly");
        }).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}
exports.getLists = (req,res)=>{
	List.findAll().then(list=>{
		if(!list){
			return res.status(404).send('User Not Found.');
		}
		console.log(list)
		res.status(200).send({list});
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}