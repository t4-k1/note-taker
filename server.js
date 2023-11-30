const express = require('express')
const fs = require('fs')
const router = express.Router()
const app = express()
const PORT = 3001

app.get('/', (req, res) => {
  res.send('hello worldz')
})

app.get('/api/notes', (req, res) => {
  // return notes.html
})

app.post('/api/notes', (req, res) => {
  // return notes.html
})

app.listen(PORT, () => {
  console.log(`exmaple app listeining on port ${PORT}`)
})
