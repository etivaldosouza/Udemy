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

//===================== outros exemplos =====================================


let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log('Au Au')
    }
}

let labrador = Object.create(cachorro)


labrador.latir()

console.log(labrador.patas)

labrador.raca = 'Labrador'

console.log(labrador.raca)

console.log(cachorro.raca)


pastor.raca = 'Pastor Alemão'

console.log(pastor.raca)