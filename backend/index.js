const express = require('express')
const generatecode = require ('./untils/generator')


const app = express()
app.use(express.json());
const port = 3000



app.get('/senhas', (req, res) => {
  res.send(senhas)
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})