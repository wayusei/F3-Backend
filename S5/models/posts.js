// Título.
// Contenido.
// Categoría.
// Autor.

const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('Post', {
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