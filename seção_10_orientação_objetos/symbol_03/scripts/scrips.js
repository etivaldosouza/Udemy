/*

*/ 

const s1 = Symbol()
const s2 = Symbol()

//o método "for" permite criar um identificador no registro global para um simbolo
const s3 = Symbol.for('Bruno') //
const s4 = Symbol.for('canal')


console.log(s1)
console.log(s2)

console.log(s3===s4)
console.log(typeof(s1))

console.log(Symbol.keyFor(s1))

console.log(Symbol.keyFor(s3))
console.log(Symbol.keyFor(s4))



// associação com classe:


class Jogador {

    constructor(nomeDoJogador){

        this.nome = nomeDoJogador

        this.id = Symbol()
    }
}

let jogadores = [new Jogador('j1'),new Jogador('j2'),new Jogador('j3'),new Jogador('j4')]

let s_1 = jogadores[0].id

// p/ remover um jogador do array:

jogadores = jogadores.filter((j)=>{
    return j.id != s_1

})


console.log(jogadores)

console.log(s_1)