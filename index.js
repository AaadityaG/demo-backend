require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('dev_aditya')
})

app.get('/jokes', (req, res) => {
  res.json({
    joke: 'Why did the chicken cross the road? To get the other side!',
    punchline: 'But why did the chicken cross the road? to get the other side!',
  })
})

app.get('/login', (req, res) => {
  res.send('<h1>Hello World from the login...</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})