/*
    Getters e setters

=> Get: serve para resgatar o valor de uma propriedade

=> Set: serve para alterar o valor de uma propriedade

*/ 


class Cachorro {
    constructor(racaDoCachorro){
        this.raca = racaDoCachorro
    }


    get verRaca(){
        return `A raça é ${this.raca}` 
    }

    set novaRaca(value){
        this.raca = value
    }
}

let pastor = new Cachorro('Pastor Alemão')

console.log(pastor.verRaca)

pastor.novaRaca = 'Golden'

console.log(pastor.verRaca)



//======================================================================//

class Cachorros {
    constructor(racaDoCachorro,corDoCachorro){
        this.raca = racaDoCachorro
        this.cor = corDoCachorro
    }

    latir(){
        return 'AuAuAu...'
    }

    get verCor(){
        return this.cor
    }

    get verRaca(){
        return this.raca
    }

    set novaCor(valor){
        this.cor = valor
    }
    set novaRaca(racaNova){
        this.raca = racaNova
    }
}

let pastor = new Cachorros('Pastor Alemão','Preto')
console.log(pastor)

// altera cor
pastor.novaCor = 'Amarelo'

console.log(pastor.verCor)
console.log(pastor.latir())


// alterar raca:

pastor.novaRaca = 'Poodle'
console.log(pastor.verRaca)
console.log(pastor.latir())

