const PromptSync = require("prompt-sync")();

 const prompt = PromptSync;

 let numero1 =Number( prompt('um numero: '));
 let numero2 =Number( prompt('um numero: '));
 let numero3 =Number(prompt('um numero: '));
 const media = (numero1 + numero2 + numero3) / 3;
 let result = 0;

 function comparaNumero(){
    if(Math.max(numero1,media) > media){
        console.log(numero1)
        result++;
    }
    if(Math.max(numero2, media) > media){
        console.log(numero2)
        result++;
    }
    if(Math.max(numero3, media) > media){
        console.log(numero3)
        result++
    }
 };

 comparaNumero()
 console.log(` a media é ${media}`)
 console.log(`temos ${result} valores estão a cima da media`)