// Título.
// Contenido.
// Categoría.
// Autor.

const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const PostModel = (sequelize) => sequelize.define('Posts', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    Title:{
        type: DataTypes.STRING
    },
    Content:{
        type: DataTypes.STRING
    },
    Category:{
        type: DataTypes.STRING
    },
    Author:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps:false
});

//UserModel.hasMany(PostModel);

module.exports = PostModel;