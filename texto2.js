let texto = 'uma dimensão constitutiva da existência humana. Uma vez que somos dotados de vida e razão, coloca-se para todos nós, inevitavelmente, a questão de articular uma à outra essas duas faculdades. Não podemos, sem filosofar, pensar nossa vida e viver nosso pensamento: já que isto é a própria filosofia '
let textoArrey = texto.split(' ');
let  contador = 0;
let maiorQue5 = [];

for(let i = 0; textoArrey.length >  i ; i++){
    if(textoArrey.length > 5){
        contador++
    }
}

console.log(textoArrey)
console.log(contador)
console.log(maiorQue5)