const PromptSync = require("prompt-sync")();
const prompt = PromptSync;

// let nome = prompt('digitie seu nome: ');
// let anoEscolar = prompt('digitie seu anoe escolar: ');
// let notasPortugues = Number(prompt('digite duas nota de portugues'));
// let notaMatematica = Number(prompt('digitw sua nota de matimática'));

class Aluno{
    constructor(nome, anoEscolar ){
        this.nome = nome;
        this.anoEscolar = anoEscolar;
        this.notasPortugues = [];
        this.notasMatematica = [];
        this.mediaFinal = 0;
    }
    addNota(nota,disciplina){
        disciplina === 'portugues'? this.notasPortugues.push(nota): 'ESCOLHA UMA  MATÉRIA EXISTENTE';
        disciplina === 'matematica'? this.notasMatematica.push(nota): 'ESCOLHA UMA  MATÉRIA EXISTENTE';
    };
    calcularMedia(disciplina){
    let resultado = 0;
    let notas;
       if( disciplina === 'portugues'){ 
        notas = this.notasPortugues
        }
        else if( disciplina === 'matematica'){ 
            notas = this.notasMatematica
        }
        for(let nota of  notas){
            resultado += notas
        }
        return resultado / notas.length
    };
    calcularMediaFinal(){
    let mediaPortugues = this.calcularMedia("portugues");
    let mediaMatematica = this.calcularMedia("matematica");

    this.mediaFinal = (mediaPortugues + mediaMatematica) / 2;
    }
    boletin(){
         console.log(`
    ---- BOLETIM ----
    Nome: ${this.nome}
    Ano: ${this.anoEscolar}º ano

    Português
    Notas: ${this.notasPortugues}
    Média: ${this.calcularMedia("portugues").toFixed(1)}

    Matemática
    Notas: ${this.notasMatematica}
    Média: ${this.calcularMedia("matematica").toFixed(1)}

    Média final: ${this.mediaFinal.toFixed(1)}
    -------------
    `)
    }
}


