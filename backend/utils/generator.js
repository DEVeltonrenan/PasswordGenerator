const crypto = require('crypto'); // para gerar números aleatórios com segurança

// base de dados
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// aqui irá as funções para gerar a senha aleatória
function generateCode(options) {
    let characters = '';

    if (options.uppercase) characters += uppercase;
    if (options.lowercase) characters += lowercase;
    if (options.numbers) characters += numbers;
    if (options.specialChars) characters += specialChars;

    if (!characters) {
        throw new Error('Nenhuma opção de caracteres foi selecionada');
    }

    let code = '';
    for (let index = 0; index < options.length; index++) {
        const randomIndex = crypto.randomInt(0, characters.length);
        code += characters[randomIndex];
    }

    return code;
}

module.exports = generateCode;