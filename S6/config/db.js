const { Sequelize } = require('sequelize')

const productModel = require('../models/product')
const reviewModel = require('../models/review')

const sequelize = new Sequelize(
  'sesion6',
  'root',
  'Ut9u34nt-db',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false
  }
)

const models = [ productModel, reviewModel ]

for(let model of models)
  model(sequelize)

//relaciones
const { products, reviews } = sequelize.models
reviews.belongsTo(products) 

module.exports = sequelize