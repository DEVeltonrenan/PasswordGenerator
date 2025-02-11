const express = require('express')
const crypto = require('crypto')



const app = express()
const port = 3000




let senhas = [{usuario: "maycon", site: "netflix", senha: "tinocoepardinho"}, {usuario: "maycon", site: "netflix", senha: "tinocoepardinho"} ]
    

app.get('/senhas', (req, res) => {
  res.send(senhas)
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})