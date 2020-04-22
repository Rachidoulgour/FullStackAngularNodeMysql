module.exports = (sequelize, Sequelize) => {
	const List = sequelize.define('lists', {
	  title: {
		  type: Sequelize.STRING
      }
    //   done: {
    //     type: Sequelize.BOOLEAN, 
    //     allowNull: false, 
    //     defaultValue: false
    //   }
	  
    },
    {
        timestamps: false
    });
	
	return List;
}