/*
    Mutação (Mutability)

=> Um objeto pode herdar todas as características do outro, virando uma referência ao mesmo


*/ 

let objetoA = {
    pontos: 10
}

let objetoB = objetoA // temos uma referência a um objeto. ao mudar a propriedade de um, automaticamente mudará do outro.

let objetoC = { //idêntico ao A porém ñ é igual
    pontos: 10
}

console.log(objetoA == objetoB)

console.log(objetoA == objetoC)

//===================================//

let pessoa = {
    nome: "Matheus"
}

let pessoa2 = pessoa

let pessoa3 = {
    nome: "Matheus"
}

console.log(pessoa == pessoa2) // verdade
console.log(pessoa3 == pessoa) // falso
console.log(pessoa3 == pessoa2) // falso

pessoa2.nome = 'Pedro'

console.log(pessoa.nome)

pessoa.nome = "Maria"

console.log(pessoa2.nome)