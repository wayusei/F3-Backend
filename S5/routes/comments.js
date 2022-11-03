const express = require('express')
const sequelize = require('../config/database')
const router = express.Router()

//GET -> Obtener
router.get('/', async (req, res) => {
  return await sequelize.models.Comments.findAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data:err }))
})
// POST -> Añadir
router.post('/', async (req,res) => {
  const { body } = req
  return await sequelize.models.Comments.create({
    comment: body.comment,
    post: body.post,
    user: body.user
  })
  .then(data => res.json({ message: 'Created', data }))
  .catch(err => res.json({ message: 'Error', data: err }))
})
// PATCH -> Editar
router.put('/:id', async (req,res) => {
  const { body, params: { id } } = req
  const Comment = await sequelize.models.Comments.findOne({
    where: { id: id }
  })
  if (!Comment){
    return res.status(404).json({ message: 'Comment not found' })
  }
  const data = await Comment.update({
    comment: body.comment,
    post: body.post,
    user: body.user
  })
  return res.json({message: 'Comment updated', data})
})
// DELETE -> Eliminar ✔
router.delete('/:id', async (req,res) => {
  const { params: { id } } = req
  const Comment = await sequelize.models.Comments.findOne({
    where: { id: id }
  })
  if (!Comment){
    return res.status(404).json({ message: 'Comment not found' })
  }
  const data = await Comment.destroy()
  return res.json({ message: 'Deleted', data})
})


module.exports = router