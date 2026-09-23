const PromptSync = require("prompt-sync")();

const prompt = PromptSync;

let valorEmKilosWatss = Math.abs(Number(prompt('Digite o valor em de consumo de enregia: ')));

function calcular(){
    if(valorEmKilosWatss <= 99 ){
        console.log(valorEmKilosWatss * 1.35);

    }else if(valorEmKilosWatss > 100 && valorEmKilosWatss <= 299){
        console.log(valorEmKilosWatss * 1.65);

    }else if(valorEmKilosWatss > 300 && valorEmKilosWatss <= 574){
        console.log(valorEmKilosWatss * 1.75);

    }else {
        console.log(valorEmKilosWatss * 2.15);
    }
}

calcular()