const express = require('express');
const cors = require('cors');
const generateCode = require('./utils/generator');

const app = express();

app.use(cors());

const port = 3000;

app.use(express.json());

app.post('/generate', (req, res) => {
  try {
    const { uppercase, lowercase, numbers, specialChars, length } = req.body;

    // Verifica se ao menos um tipo de caractere foi selecionado
    if (!uppercase && !lowercase && !numbers && !specialChars) {
      return res.status(400).json({ error: 'Ao menos uma opção de caracteres deve ser selecionada' });
    }

    // Verifica se o comprimento mínimo é válido
    if (!length || length < 4) {
      return res.status(400).json({ error: 'O tamanho mínimo da senha é 4 caracteres' });
    }

    const code = generateCode({ uppercase, lowercase, numbers, specialChars, length });
    res.json({ code });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
