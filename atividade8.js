const PromptSync = require("prompt-sync")();

const prompt = PromptSync;

let ladoA = Number(prompt('digite o tamanho de um alado: '));
let ladoB = Number(prompt('digite o tamanho de um alado: '));
let ladoC = Number(prompt('digite o tamanho de um alado: '));

function trianguloVerdade(a,b,c){
    let result =  a + b > c && b + c > a && a + c  > b ? 'Um triangulo perfeito' : 'Não é um triângulo';
    console.log(a+b)
    return result;
}

console.log(trianguloVerdade(ladoA, ladoB, ladoC))


