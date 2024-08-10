class Computador {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam  
    Ssd


    Constructor(tipo, processador, video, Armazenamento, memoriaRam, ssd){
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = Armazenamento;
        this.MemoriaRam = memoriaRam;
        this.Ssd = ssd; 
    }

    ExibirInformações() {
        console.log("informações do computador:");
        console.log('Tipo: '+ ${this.Tipo});
        console.log('Processador: '+ ${this.Processador});
        console.log('Vídeo: '+ ${this.Video});
        console.log('Armazenamento: '+ ${this.Armazenamento});
        console.log('Memória RAM: '+ ${this.MemoriaRam});
        console.log('SSD: '+ ${this.Ssd});
    }
}

//Exemplo de uso
const meu computador = new Computador("notebook", "Ryzen 7", "Dedicado", 1000, 16, true);
meuComputador.ExibirInformacoes();