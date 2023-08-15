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

const filme1 = new Filme('Como treinar o seu dragao', 2010, 'Infantil/Aventura', '1h 38m');
const filme2 = new Filme('Como treinar o seu dragao 2', 2014, 'Infantil/Aventura', ' 1h 42m');
const filme3 = new Filme('Como treinar o seu dragao 3', 2019, 'Infantil/Aventura', '1h 44m');

filme1.infoFilme();
filme1.AssistirFilme();
filme1.AvaliarFilme(10);
filme1.infoFilme();
filme2.infoFilme();
filme2.AssistirFilme();
filme2.AvaliarFilme(10);
filme2.infoFilme();
filme3.infoFilme();
filme3.AssistirFilme();
filme3.AvaliarFilme(10);
filme3.infoFilme()
