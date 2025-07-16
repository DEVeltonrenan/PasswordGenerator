<<<<<<< HEAD
const express = require("express");
const generatecode = require("./untils/generator");
=======
const express = require('express');
const generateCode = require('./utils/generator');
const cors = require('cors');
>>>>>>> f04ba6cb80546db83db98611bb31a793c9597c32

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.post('/generate', (req, res) => {
  try {
<<<<<<< HEAD
    const { uppercase, lowercase, numbers, specialChars, length } = req.body; //pega a informação do corpo da requisição HTML
    if (characters === none) {
      return res.status(400).json({ error: 'Ao menos uma caixa deve ser selecionada' });
    }//verifica se foi selecionado algum tipo de caracteres

    // NÃO ESTÁ FUNCIONANDO COORETAMENTE, AS MENSSAGENS NÃO ESTÃO SENDO EXIBIDAS!!!

    //verificar//

    if (length < 4) {
      return res.status(400).json({ error: 'O tamanho mínimo da senha é 4 caracteres' });
    }

    const code = generateCode({ uppercase, lowercase, numbers, specialChars, length });
    res.json({ code });
  } catch (error) {
    res.status(500).json({ error: 'Erro ' });
=======
    const { uppercase, lowercase, numbers, specialChars, length } = req.body;
    if (!length || length < 1) {
      return res.status(400).json({ error: 'O tamanho deve ser maior que zero.' });
    }

    const code = generateCode({ uppercase, lowercase, numbers, specialChars, length });
    res.json({ code });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno' });
>>>>>>> f04ba6cb80546db83db98611bb31a793c9597c32
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
