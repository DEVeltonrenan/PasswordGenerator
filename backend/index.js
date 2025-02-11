const express = require('express')
const crypto = require('crypto') //para gerar numeros aleatorios com segurança



const app = express()
app.use(express.json());
const port = 3000

//BASE DE DADOS DE CARACTERES//

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';





    

app.get('/senhas', (req, res) => {
  res.send(senhas)
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})