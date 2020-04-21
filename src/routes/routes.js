module.exports = function(app) {

    const usercontroller = require('../controllers/usercontroller');
    app.get('/', usercontroller.home);
    app.post('/signup', usercontroller.signup);
    app.post('/signin', usercontroller.signin);
	
	
}