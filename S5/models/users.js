const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    firstName:{
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    },
    bio:{
        type: DataTypes.STRING
    },
    type:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps:false
});

User.hasMany(Post);

module.exports = User;