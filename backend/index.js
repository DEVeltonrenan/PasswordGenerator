const express = require("express");
const generatecode = require("./untils/generator");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/generate", (req, res) => {
  try {
    const { uppercase, lowercase, numbers, specialChars, length } = req.body;
    if (!length || length < 1) {
      return res
        .status(400)
        .json({ error: "O tamanho deve ser maior que zero." });
    }

    if (!uppercase && !lowercase && !numbers && !specialChars) {
      return res.status(400).json({
        error: "Selecione pelo menos um tipo de caractere.",
      });
    }

    const code = generatecode({
      uppercase,
      lowercase,
      numbers,
      specialChars,
      length,
    });

    res.json({ code });
    
  } catch (error) {
    res.status(500).json({ error: "Erro interno" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
