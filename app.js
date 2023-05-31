const express = require('express')
const app = express()
const port = process.env.PORT;

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kinsta', (req, res) => {
  res.send('Hello Kinsta!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})