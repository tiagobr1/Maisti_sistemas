const PromptSync = require("prompt-sync")();

let prompt =PromptSync;
let numero = Number(prompt('escereva uma numero: '))

let i = 0;


while(i <= numero){
    console.log(numero)
    i++
}