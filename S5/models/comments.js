
const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/database');


const CommentModel = (sequelize) => sequelize.define('Comments', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement: true
    },
    comment:{
        type: DataTypes.STRING
    },
    post:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps:true
});

module.exports = CommentModel;