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
    if (!length || length < 1) {
      return res.status(400).json({ error: 'O tamanho deve ser maior que zero.' });
    }

    const code = generateCode({ uppercase, lowercase, numbers, specialChars, length });
    res.json({ code });
  } catch (error) {
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
