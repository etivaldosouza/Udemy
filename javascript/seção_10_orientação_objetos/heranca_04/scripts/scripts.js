class carro {
    constructor(nomeDoCarro,portasDoCarro){
        this.nome = nomeDoCarro
        this.portas = portasDoCarro
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor) {
        this.cor = cor
    }
}