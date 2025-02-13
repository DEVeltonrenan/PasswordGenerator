const crypto = require('crypto') //para gerar numeros aleatorios com segurança


//base de dados 

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';









//aqui irá as funções para  gerar a senha aleatoria//

function generatecode (options) {
    let charaters ='';

    if (options.uppercase) charaters += uppercase;
    if (options.lowercase) charaters += lowercase;
    if (options.numbers) charaters += numbers;
    if (options.specialChars) charaters += specialChars;

    if (!charaters){
        throw new error ('Nnehuma opção de caracteres foi selecionado')

        
    }

    let code = '';
    
    for (let index = 0; index < options.length; index++) {
        const randomIndex = crypto.randomInt (0, charaters.length);
        code += charaters[randomIndex]
        
    }   

    return code;
}   


    module.exports = generatecode;