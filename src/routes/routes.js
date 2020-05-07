module.exports = function(app) {

    const usercontroller = require('../controllers/usercontroller');
    const listController = require('../controllers/listcontroller');
    app.get('/', usercontroller.home);
    app.post('/signup', usercontroller.signup);
    app.post('/login', usercontroller.signin);
    app.post('/add-list', listController.createList);
    app.get('/get-lists', listController.getLists);
    app.get('/get-list/:id', listController.getLists);
    app.post('/add-task', listController.createTask);
    app.delete('/delete-task/:id', listController.deleteTask);
	
}