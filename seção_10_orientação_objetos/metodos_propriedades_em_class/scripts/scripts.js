/*
    Mais sobre:
    
=> Não podemos adicionar propriedades fora do constructor e direto na classe, só via prototype.

=> As propriedades deve está dentro do constructor

=> A classe só aceita métodos


*/ 


class Cachorro {

    constructor(racaDoCachorro){
        this.raca = racaDoCachorro
    }

    latir(){            // metodo latir
        console.log('AuAuAu...')
    }
}

// para adicionar propriedade:

Cachorro.prototype.patas = 4


let poddle = new Cachorro('Poodle')

console.log(poddle)
console.log(poddle.patas)

poddle.latir()



//================================================================//







