module.exports = (sequelize, Sequelize) => {
	const List = sequelize.define('users', {
	  title: {
		  type: Sequelize.STRING
	  }
	  
	});
	
	return User;
}