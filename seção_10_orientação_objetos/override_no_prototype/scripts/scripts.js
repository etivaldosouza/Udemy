/*
    Override nas propriedades do Prototype

=> Sempre que adicionamos uma propriedade a um objeto, é criada uma idêntica no prototype.

=> Podemos Substituir a do prototype.

*/ 

class Cachorro {

    constructor(racaDoCachorro){

        this.raca = racaDoCachorro
    }
}


let pastorAlemao = new Cachorro('Pastor Alemão')

console.log(pastorAlemao)

Cachorro.prototype.raca = 'Rotweiller'

console.log(pastorAlemao.raca)

console.log(Cachorro.prototype.raca)



//================================================


class Cachorros {
    constructor(racaDoCachorro,corDoCachorro){

        this.raca = racaDoCachorro
        this.cor = corDoCachorro
    }
    latir() {
        console.log('AuAuAuAu....')
    }
}

Cachorros.prototype.raca = 'SRD'       //estou definindo a raça quando ainda ñ foi definida
Cachorros.prototype.patas = 4

console.log(Cachorros.prototype)
console.log(Cachorros.prototype.latir())

let labrador = new Cachorros('Labrador','Amarelo')

console.log(labrador)
console.log(labrador.patas)
labrador.latir()

console.log(Cachorros.prototype.raca)

console.log(labrador.raca)
console.log(labrador.cor)


