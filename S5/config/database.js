const { Sequelize } = require('sequelize')

const NoteModel = require('../models/notes')
const UserModel = require('../models/users')
const PostModel = require('../models/posts')
const CommentModel = require('../models/comments')

const sequelize = new Sequelize(
  'sesion5',
  'root',
  'Ut9u34nt-db',
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }
)

const models = [ NoteModel, UserModel, PostModel, CommentModel ]

for(let model of models)
  model(sequelize)

  module.exports = sequelize