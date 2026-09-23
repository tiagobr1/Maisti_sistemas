const PromptSync = require("prompt-sync")();

let pormpt = PromptSync;
let entrada = Number(pormpt('escreva um  numero: '));
let lista = [0,1,2,3,4,5,6,7,8,9,10]
let i = 0;

while(i <= lista.length){
    if(lista[i]== entrada){
        console.log(true)
    }
    i++
}