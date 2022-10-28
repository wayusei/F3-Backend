const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3000
app.use(express.json())

const notes = [
    {
        id: 1,
        title: 'Dummy',
        content: 'Nota dummy'
    }
]

app.get('/notes', (req, res) =>{
    res.send(notes)
})

app.post('/notes', (req, res) =>{
    const id = req.params.id
    const title = req.params.title
    const content = req.body
    //res.send(`Nota ${title} con el id ${id}`)
    res.status(201).json(notes[title])
})
app.get('/notes', (req, res) =>{
    res.send(notes)
})
app.get('/notes', (req, res) =>{
    res.send(notes)
})



app.get('/', (req, res) => {
    res.send('<h1>Mi API</h1>')
})

app.get('/archivo', (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    const data = fs.readFileSync('./textoplano.html', 'utf-8')
    res.send(data)
}) 

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})