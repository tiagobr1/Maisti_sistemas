const PromptSync = require("prompt-sync")();

let prompt = PromptSync;

let genero = prompt('voce é homem ou mulher? , digite h para homem ou digitie m para mulher: ');
let idade = prompt('qual sua idade?: ');

function valorCorretora(entrada, idade){
   let result =  entrada.toLowerCase() == 'm' && Number(idade) >= 40 ?  '180' :  entrada.toLowerCase() == 'h' ? '200' : "valor padrão 200";
   return result;
};

let valorFun = valorCorretora(genero , idade)
console.log(valorFun)
