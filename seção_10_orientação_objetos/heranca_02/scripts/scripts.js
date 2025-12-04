class Mamifero {
    constructor(patasDoMamifero){
        this.patas = patasDoMamifero
    }
}

let gato = new Mamifero(4)

console.log(gato.patas)

class Cachorro extends Mamifero{
    constructor(patasDoMamifero,racaDoCachorro){
        super(patasDoMamifero)
        this.raca =  racaDoCachorro
    }
}

let poodle = new Cachorro(4,'Poodle')
console.log(poodle)

let pastor = new Cachorro(4,'Pastor Alemão')
console.log(pastor)