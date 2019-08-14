/* clientContacts MODULE
    defines the deacon encounter with associated clients */

module.exports = function (sequelize, DataTypes) {
    var clientContacts = sequelize.define("clientContacts", {
        contactDate: {
            type: DataTypes.DATE,
            notNull: true,
            defaultValue: DataTypes.NOW
        },

        expressedNeed: {
            type: DataTypes.STRING,
            notNull: true
        },

        //Added to help search feature on main page (delimit by #?)
        helpProvided: {
            type: DataTypes.STRING,
            notNull: true
        },

        dollarAmount: {
            type: DataTypes.DECIMAL(10,2),
            notNull: false,
            defaultValue: 0
        },

        giftCards: {
            type: DataTypes.INTEGER,
            notNull: false,
            defaultValue: 0
        },

        notes: {
            type: DataTypes.STRING,
            notNull: false
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
        } //,
        // deleteAt: {
        //     type: DataTypes.DATE,
        //     notNull: false
        // }
    }, 
	{
		paranoid: true
	});


    clientContacts.associate = function(models) {
        // We're saying that a clientContact should belong to an users and Clients
        // A clientContact can't be created without an User or a Client due to the foreign key constraints
        clientContacts.belongsTo(models.users, {
          foreignKey: {
            allowNull: false
          }
        });
        
        clientContacts.belongsTo(models.clients, {
          foreignKey: {
            allowNull: false
          }
        });

    };

  return clientContacts;  
}