/*
        prototype:

=> É um objeto associado a uma função ou a outro objeto


=> um objeto fallback de outro onjeto

=> Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procurada no prototype deste objeto

=> O prototype de um objeto criado do zero é o Object, que tem os métodos nativos da linguagem


*/ 

let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa))

console.log(Object.getPrototypeOf(pessoa) === Object.prototype)

console.log(pessoa.hasOwnProperty('maos'))






function pessoa(nome){
    this.nome=nome
}


let p = new pessoa('neto')

pessoa.prototype.mostrar = function(){
    return this.nome
}

console.log(p.mostrar())


// console.log(pessoa.prototype)
//console.log(p.__proto__)


