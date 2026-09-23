function GeradoreDeObjeto(nome, idade){
    return{
        nome,
        idade,
        falar(){
            console.log(`ola, meu nome é ${nome}`);
        }
    };
}

const pessoa = GeradoreDeObjeto('Ana', 25)
pessoa.falar()


function GeradoraDeObjetos(nome,idade){
     this.nome = nome;
     this.idade = idade;
     this.apresentar = function(){
        return `Olá , meu nome é ${this.nome}`;
     };
}

const usuario = new GeradoraDeObjetos('Ana', 25);
console.log()
console.log(usuario.apresentar());