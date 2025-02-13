const express = require('express')
const generatecode = require ('./untils/generator')


const app = express()
const port = 3000;

app.use(express.json());



app.post('/generator', (req, res) =>   {   
  try {const {upercase, lowercase, numbers, specialChars, length} = req.body;
  if (!length || length < 1) {  return res.status(400).json({ error: 'O tamanho deve ser maior que zero.'}); 
  }

  const code = generatecode({upercase, lowercase, numbers, specialChars, length});
    res.json({ code });
} catch (error) {
  res.status(500).json({ error: 'Erro interno' });
}
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
