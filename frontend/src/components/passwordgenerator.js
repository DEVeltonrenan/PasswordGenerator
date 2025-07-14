import React, { useState } from "react";

const PasswordGenerator = () => {
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [specialChars, setSpecialChars] = useState(true);
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

    const copyToClipboard = () => {
      if (!password) return;
      navigator.clipboard.writeText(password);
      alert("Senha copiada!");
    };

  return (
    <div className="password-generator">
      <h2 classname="txt-password-generator">PASSWORD GENERATOR</h2>

      <div className="password-display" onClick={copyToClipboard}>
        <span>{password || "GERE A SENHA AQUI"}:</span>
      </div>

      <div className="control-group">
        <label>Tamanho da senha</label>
        <input
          type="number"
          min="1"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          Letra Maiúscula
        </label>
      </div>

      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          Letra Minúscula
        </label>
      </div>

      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          Números
        </label>
      </div>

      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={specialChars}
            onChange={() => setSpecialChars(!specialChars)}
          />
          Caracteres Especiais
        </label>
      </div>

      <button classname="generate-btn" onClick={generatePassword}>
        GERAR SENHA
      </button>

      <div className="output">{password}</div>
    </div>
  );
};

export default PasswordGenerator;
