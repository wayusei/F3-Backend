const express = require('express')
const sequelize = require('../config/database')
const router = express.Router()

//GET -> Obtener
router.get('/', async (req, res) => {
  return await sequelize.models.Users.findAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data:err }))
})
// POST -> Añadir
router.post('/', async (req,res) => {
  const { body } = req
  return await sequelize.models.Users.create({
    firstName: body.firstName,
    lastName: body.lastName,
    image: body.image,
    bio: body.bio,
    type: body.type
  })
  .then(data => res.json({ message: 'Created', data }))
  .catch(err => res.json({ message: 'Error', data: err }))
})
// PATCH -> Editar
router.put('/:id', async (req,res) => {
  const { body, params: { id } } = req
  const User = await sequelize.models.Users.findOne({
    where: { id: id }
  })
  if (!User){
    return res.status(404).json({ message: 'User not found' })
  }
  const data = await User.update({
    firstName: body.firstName,
    lastName: body.lastName,
    image: body.image,
    bio: body.bio,
    type: body.type
  })
  return res.json({message: 'User updated', data})
})
// DELETE -> Eliminar ✔
router.delete('/:id', async (req,res) => {
  const { params: { id } } = req
  const User = await sequelize.models.Users.findOne({
    where: { id: id }
  })
  if (!User){
    return res. status(404).json({ message: 'User not found' })
  }
  const data = await User.destroy()
  return res.json({ message: 'Deleted', data})
})

module.exports = router