const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('entendi a prontosjdpaidhf!')
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})