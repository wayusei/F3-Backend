
const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Comment = sequelize.define('Comment', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    Comment:{
        type: DataTypes.STRING
    },
    Category:{
        type: DataTypes.STRING
    },
    Autor:{
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