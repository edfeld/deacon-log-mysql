/*USER MODULE
	defines the USER table for authentication, badges, and moderator 
	status*/

module.exports = function (sequelize, DataTypes) {
	var users = sequelize.define("users", {
	  username: {
			type: DataTypes.STRING,
			notNull: true,
			unique: true
		},
		
		passwordHashSalt: DataTypes.STRING,
		
		administrator: {
			type: DataTypes.BOOLEAN,
			notNull: false,
			defaultValue: 0
		},
															 
		createdAt: {
			type: DataTypes.DATE,
			notNull: true,
			defaultValue: DataTypes.NOW
		},

		updatedAt: {
			type: DataTypes.DATE,
			notNull: true,
			defaultValue: DataTypes.NOW
    },
                               
		firstName: {
			type: DataTypes.STRING,
			notNull: false
		},
                               
		lastName: {
			type: DataTypes.STRING,
			notNull: false
		},

		aboutMe: {
			type: DataTypes.STRING,
			notNull: false
		},
                               
		googleId: {
				type: DataTypes.STRING,
				notNull: false
		},

		email: {
            type: DataTypes.STRING,
            notNull: false,
            validate: {
                isEmail: true
						}
			
		} //,
		// deleteAt: {
		// 	type: DataTypes.DATE,
		// 	notNull: false
		// }
	}, 
	{
		paranoid: true
	});
  
	users.associate = function (models) {
	  // We're saying that a login should belong to an user
	  // A login can't be created without an user due to the foreign key constraint
	  users.hasMany(models.clientContacts, {});
		
	};
	
	
	return users;
};
  
  