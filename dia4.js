const PromptSync = require("prompt-sync")();

const prompt = PromptSync;
let entrada1 = prompt('escreva uma palavra: ');
let entrada2 = prompt('escreva uma palavra: ');

function verique(a , b){
    return a === b;
}

console.log(verique(entrada1, entrada2));

//  quinta questão //////////////////////////////////////////////////


function inverter(a){
    return  a.split('').reverse().join('');
}


console.log(inverter(entrada1));

{a , b} = {entrada1, entrada2} 