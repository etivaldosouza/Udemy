/*
    Symbols

=> Propriedades únicas, que não podem ser alteradas e nem criadas duas vezes

=> Podemos utilizar como uma constante, só que para propriedade de objeto

*/ 

// relembrando: em classes as propriedades são criadas dentro do constructor. quando quero criar uma propriedade fora do constructor eu utulizo o .prototye
class Cachorro {

    constructor(racaDoCachorro){

        this.raca = racaDoCachorro
    }
}

let patas = Symbol()

Cachorro.prototype[patas] = 4

// acessando symbol
console.log(Cachorro.prototype[patas])

let goldem = new Cachorro('Golden Retriever')

console.log(goldem)

console.log(goldem[patas])



