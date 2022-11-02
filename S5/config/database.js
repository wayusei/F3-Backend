const { Sequelize } = require('sequelize')

const NoteModel = require('../models/notes')

const sequelize = new Sequelize(
  'sesion5',
  'root',
  'Ut9u34nt',
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  }
)

const models = [ NoteModel ]

for(let model of models)
  model(sequelize)

  module.exports = sequelize