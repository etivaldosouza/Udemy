/*
    Symbols

=> Propriedades únicas, que não podem ser alteradas e nem criadas duas vezes

=> Podemos utilizar como uma constante, só que para propriedade de objeto

*/ 


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



