const PromptSync = require("prompt-sync")();

 const prompt = PromptSync

 let  dias = Number(prompt('quantos dias ficou com  o carro: '));
 let quilometros =Number(prompt('quantos quilometros foram rodados: '));
 
 function totalPagar(){
    const cobrancaPorKilometrosAmais = 12;
    const valorDia = 90;
    let result;
    if(quilometros > 100000){
        result = (dias *  valorDia) + ((quilometros - 100000) / 1000) * 12
    }else{
       result =  dias *  valorDia
    }
    
    return result;
 }

 console.log(totalPagar())