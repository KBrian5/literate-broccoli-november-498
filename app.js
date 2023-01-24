const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World, Kevin likes Novermber!')
})

app.listen(PORT)
