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
exports.getLists = async (req,res)=>{
	// List.findAll().then(list=>{
	// 	if(!list){
	// 		return res.status(404).send('User Not Found.');
	// 	}
	// 	//console.log(list)
	// 	this.getTasks()
	// 	res.status(200).send({list});
	// }).catch(err => {
	// 	res.status(500).send('Error -> ' + err);
	// });
	const lists = await List.findAll();
	const tasks = await Task.findAll();
	res.json({lists: lists, tasks: tasks})
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
	console.log("Processing func -> createTask");
	console.log("req>>>:  ",req.body)
	console.log("reqparams>>>:  ",req.params)
	const tipo = typeof(req.body.user_id)
	console.log(tipo)
	Task.create({
        text: req.body.text,
		user_id: req.body.user_id,
		list_id:req.body.list_id,
		done: false,
		
	}).then(() => {
				res.json({message:"List created successfuly"});
        }).catch(err => {
		res.status(500).send("Fail! Error -> " + err);
	})
}
exports.getTasks = (req,res)=>{
	Task.findAll().then(task=>{
		// if(!task){
		// 	return res.status(404).send('Task Not Found.')
		// }
		console.log("HOLAAA",task)
		
		res.status(200).send({task});
	}).catch(err => {
		//res.status(500).send('Error -> ' + err);
		console.log("error",err)
	})
}
exports.deleteTask = (req,res)=>{
	console.log(req.params)
	Task.destroy({
		where:{
			id:req.params.id
		}
	}).then(task=>{
		if(!task){
			return res.status(404).send({message:'List Not Found.'});
		}
		//console.log(task)
		res.status(200).send({message:"Deleted"});
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}