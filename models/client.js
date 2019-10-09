/* Client Module*/

    module.exports = function (sequelize, DataTypes) {
        var clients = sequelize.define("clients", {
            // First Name
            firstName: {
                type: DataTypes.STRING,
                notNull: true
            },

            //Last Name
            lastName: {
                type: DataTypes.STRING,
                notNull: true
            },

            //
            streetAddress1: {
                type: DataTypes.STRING,
                notNull: false
            },

            streetAddress2: {
                type: DataTypes.STRING,
                notNull: false
            },

            city: {
                type: DataTypes.STRING,
                notNull: false
            },

            state: {
                type: DataTypes.STRING,
                notNull: false
            },

            ZIP: {
                type: DataTypes.STRING,
                notNull: false
            },

            //Concatonated string will contain all
            //children comments uuids for display
            phone1: {
                type: DataTypes.STRING,
                notNull: true,
                validate: {
                    isValidPhoneNo: function(value) {
                        if (!value) return value;
            
                        var regexp = /^[0-9]+$/;
                        var values = (Array.isArray(value)) ? value : [value];
            
                        values.forEach(function(val) {
                            if (!regexp.test(val)) {
                                throw new Error("Number only is allowed.");
                            }
                        });
                        return value;
                    }
                }
            },

            phone1Type: {
                type: DataTypes.STRING,
                isNull: true
            },

            phone2: {
                type: DataTypes.STRING,
                isNull: true,
                validate: {
                    isValidPhoneNo: function(value) {
                        if (!value) return value;
            
                        var regexp = /^[0-9]+$/;
                        var values = (Array.isArray(value)) ? value : [value];
            
                        values.forEach(function(val) {
                            if (!regexp.test(val)) {
                                throw new Error("Number only is allowed.");
                            }
                        });
                        return value;
                    }
                }
            },

            phone2Type: {
                type: DataTypes.STRING,
                isNull: true
            },
    
            notes: {
                type: DataTypes.STRING,
                isNull: true
            },
            
		    email: {
                type: DataTypes.STRING,
                allowNull: true
			
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
            } 
            
        }, 
        {
            paranoid: true
        });

        clients.associate = function(models) {
            // // A Post can't be created without a user due to the foreign key constraint
            // comments.belongsTo(models.users, {
            //   foreignKey: {
            //     allowNull: false
            //   }
            // });

            // comments.belongsTo(models.posts, {
            //     foreignKey: {
            //       allowNull: false
            //     }
            // });
            console.log("Models: ", models)
            clients.hasMany(models.clientContacts, {
            onDelete: 'cascade'
            });
        };
    
      return clients;  
    }