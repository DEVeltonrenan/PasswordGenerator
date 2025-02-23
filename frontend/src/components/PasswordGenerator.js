import React, { useState } from "react";

const PasswordGenerator = () => {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");

  const generatePassword = async () => {
    const requestBody = {
      length: parseInt(length),
      uppercase,
      lowercase,
      numbers,
      specialChars,
    };

    try {
      const response = await fetch("http://localhost:3000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      setPassword(data.code || "Erro ao gerar senha");
    } catch (error) {
      setPassword("Erro ao gerar senha");
    }
  };

  return (
    <div className="container">
      <h1>Gerador de Senhas</h1>

      <label>Tamanho da senha</label>
      <input
        type="number"
        min="1"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        />
        Letra Maiúscula
      </label>

      <label>
        <input
          type="checkbox"
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
        />
        Letra Minúscula
      </label>

      <label>
        <input
          type="checkbox"
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
        />
        Números
      </label>

      <label>
        <input
          type="checkbox"
          checked={specialChars}
          onChange={() => setSpecialChars(!specialChars)}
        />
        Caracteres Especiais
      </label>

      <button onClick={generatePassword}>Gerar Senha</button>

      <div className="output">{password}</div>
    </div>
  );
};

export default PasswordGenerator;
