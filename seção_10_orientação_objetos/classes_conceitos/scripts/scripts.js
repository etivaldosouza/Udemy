/*
    Classes

=> O Prototype do JavaScript pode ser chamado de classe

=> Pois nas outras Linguagens uma class é um molde de um objeto

=> ou seja, podemos criar diversos objetos em cima de um prototype

*/ 

//  classe cachorro é molde para objetos como por exemplo pastor alemão.

let cachorro = {
    raca: 'SRD'
}

let pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = 'pastor Alemão'

console.log(pastorAlemao.raca)


//===============================================================================



class Cachorro {
    constructor(raca){
        this.raca = 'SRD'
    }
    
}

let pastorAlemao = new Cachorro('Pastor Alemão')

console.log(pastorAlemao.raca)


//===================== outros exemplos =====================================


let cachorros = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log('Au Au')
    }
}

let labrador = Object.create(cachorros)


labrador.latir()

console.log(labrador.patas)

labrador.raca = 'Labrador'

console.log(labrador.raca)

console.log(cachorros.raca)


let pastor = Object.create(cachorros)

pastor.raca = 'Pastor Alemão' // estou incluindo a propriedade raça no objeto pastor

console.log(pastor.raca)



//===========================================================


class Cachorro {
    constructor(patas,raca){
        this.patas = patas
        this.raca = raca
    }

    latir(){
        console.log('AuAuAu....')
    }
}


let poodle = new Cachorro(4,'Poodle')

let foxPaulistinha = new Cachorro(4,'Fox Paulistinha')

let rotwailer = new Cachorro(4,'RottWeiler')


console.log(poodle)
poodle.latir()

console.log(foxPaulistinha)
poodle.latir()

console.log(rotwailer)
poodle.latir()