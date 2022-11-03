const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const UserModel = (sequelize) => sequelize.define('Users', {
    id:{
        type: DataTypes.INTEGER, primaryKey:true, allowNull: false, autoIncrement: true
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
    timestamps:true
});

module.exports = UserModel;