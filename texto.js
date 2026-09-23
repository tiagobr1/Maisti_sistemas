let texto = 'uma especulação infinita e desregrada em torno de qualquer assunto ou questão, ao sabor de cada autor, de suas preferências e mesmo seus humores. Há mesmo quem afirme não caber à Filosofia resolver, e sim unicamente sugerir questões e propor problemas, fazer perguntas cujas respostas não têm maior interesse, e com o fim unicamente de estimular a reflexão, aguçar a curiosidade '
let textoArrey = texto.split('');
let vogais = ["a",'e', 'i', 'o', 'u']
let contador = 0

for(char of textoArrey){
    if(vogais.includes(char)){
        contador++
    }
}
console.dir(textoArrey)
console.log(contador)
