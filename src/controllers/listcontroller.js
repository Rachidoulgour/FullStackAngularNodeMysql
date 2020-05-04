const db = require('../config/db.config');
const List = db.list;
const Task = db.task;
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
exports.getList = (req,res)=>{
	console.log(req.body)
	List.findOne({
		where:{
			_id:req.body._id
		}
	}).then(list=>{
		if(!list){
			return res.status(404).send('List Not Found.');
		}
		console.log(list)
		res.status(200).send({list});
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}
exports.createTask = (req, res) => {
	// Save User to Database
	console.log("Processing func -> SignUp");
	console.log("req>>>:  ",req.body)
	Task.create({
        text: req.body.text,
		user_id: req.body.userid,
		list_id:req.body.listid,
		done: false,
		
	}).then(() => {
				res.send("List created successfuly");
        }).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}