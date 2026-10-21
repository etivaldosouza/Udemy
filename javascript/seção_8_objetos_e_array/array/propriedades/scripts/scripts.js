/*
    Propriedades:

=> Propriedades são informações que podem ser verificadas de um valor

=> Quase todos os valores de JavaScript tem propriedades, menos null e undefined

=> podemos acessar as propriedades de duas maneiras:

*/ 

//==========================================================//

let nome = 'João'

let caracteres = nome.length // propriedade para comprimento de nome

console.log(caracteres)

//==========================================================//

let numeros = [1,23,34,5,6,7,8]

console.log(numeros.length)
console.log(numeros['length'])
console.log(numeros[1]) //propriedade do indice(do array numeros o elemento da posição 1)

//toda vez que tiver,após uma variável, ponto e um outro nome sem mais nada ou um colchetes com string ou um número é uma propriedade.

//============================================================//