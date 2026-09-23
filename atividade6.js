const PromptSync = require("prompt-sync")();

const prompt = PromptSync;

let entrada = prompt('escreva c  para escolher a converção de celcius para fahrenheit ou escreva f  para escolher a converção de fahrenheit para celcius,: ');
let entrada2 = prompt('escreva o valor da temperatura na escala escolhida: ');

function convert(entrada, temperatura){
    let result = entrada.toLowerCase() == 'f'?  ( Number(temperatura) - 32) * 5/9 : entrada.toLowerCase() == 'c'? (Number( temperatura )* 9/5) + 32 : 'Null';
    return result

}

let resultFunc = convert(entrada, entrada2);
console.log(resultFunc)