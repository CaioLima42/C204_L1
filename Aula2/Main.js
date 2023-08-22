var prompt = require('prompt-sync')();

class Filme{
    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avaliacao = null;
    }
    infoFilme(){
        console.log(`Titulo: ${this.titulo}\nAno: ${this.ano}\nGenero: ${this.genero}\nDuracao: ${this.duracao}\nAssistido: ${this.assistido}`);
        if(this.avaliacao != null){ console.log(`Avaliacao: ${this.avaliacao}`);} else{console.log('Sem Avaliacao')}
        console.log('------------------------------------------------------');
    }
    AssistirFilme(){
        this.assistido = true;
    }
    AvaliarFilme(avaliacao){
        this.avaliacao = avaliacao;
    }
}

var filmes = [];
var opcao = 0;
while(opcao != 5){
    console.log('insira a opcao desejada:\n1-Entrar com um filme\n2-Assistir um filme\n3-Avaliar um filme\n4-Sair com as informações dos filmes');
    console.log('5-Sair do programa');
    opcao = parseInt(prompt());
    console.log('--------------------------------------------')
    switch(opcao){
        case 1:
            titulo = prompt('Insira o titulo do filme: ');
            ano = prompt('Insira o ano do filme: ');
            genero = prompt('Insira o genero do filme: ');
            duracao = prompt('Insira o duracao do filme: ');
            const filme = new Filme(titulo,ano,genero,duracao);
            filmes.push(filme);
            console.log(`Filme ${titulo} inserido com sucesso`);
            console.log('---------------------------------------');
            break;   
        case 2:
            console.log('qual filme deseja assistir?')
            filmes.forEach((filme, i)  => {console.log(`para ${filme.titulo} digite ${i}`)});
            var valor = prompt();
            filmes[valor].AssistirFilme();
            console.log('filme assistido!!')
            break;
        case 3:
            console.log('qual filme deseja avaliar?')
            filmes.forEach((filme, i)  => {console.log(`para ${filme.titulo} digite ${i}`)});
            var valor = prompt();
            nota = prompt('digite a nota do filme')
            var assfilme = prompt();
            filmes[valor].AvaliarFilme(assfilme);
            console.log('filme avaliado!!')
        case 4:
            filmes.forEach(filme => {filme.infoFilme()});
            break;
        case 5:
            break;
        default:
            console.log('Opcao invalida, digite outra opcao')
            break;
    }
}