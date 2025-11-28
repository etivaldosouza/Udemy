/*
    Classes: construtor por new

=> em muitas linguagens temos a possibilidade de instanciar um objeto com new, no js também


=> construtores são formas de instanciar uma classe em uma linguagem de programação;

=> instanciar = criar um objeto novo

=> no construtor ja podemos definir propriedades

*/ 

function Cachorro(racaDoCachorro){  //convenção: a 1ª letra maiúscula determina que a função é uma classe
    this.raca = racaDoCachorro

}


let foxPaulistinha = new cachorro('Fox Paulistinha')

console.log(foxPaulistinha)



// =============================================================


// exemplo 2: 


function Cachorros(racaDoCachorro,patasDoCachorro,corDoCachorro){

    this.raca = racaDoCachorro
    this.patas = patasDoCachorro
    this.cor = corDoCachorro
    this.latir = function(){
        console.log('AuAuAu!!!...')
    }
}

let poodle = new Cachorros('Poodle',4,'Preto')

console.log(poodle)

poodle.latir()

let srd = new Cachorros('SRD',4,'Branca')
console.log(srd)
srd.latir()