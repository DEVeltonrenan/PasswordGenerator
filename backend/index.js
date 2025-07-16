const express = require("express");
const generatecode = require("./untils/generator");

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.post('/generate', (req, res) => {
  try {
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
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
