/*
    indexOf()

=> procura um elemento no array, se encontrar, retorna o índice(a posição) desse elemento no array
caso ñ encontre retorna -1

=> havendo dois ou mais dados iguais e do mesmo tipo, o índice retornado é o valor do elemento de índice mais baixo

*/ 

const arr = [12,34,"maujor", "xpto",34,"c",12,"maujor",237]

console.log(arr.indexOf("xpto"))

console.log(arr.indexOf(12))

console.log(arr.indexOf(12,2)) // parâmetro obrigatório(12) é o elemento cujo índice desejamos conhecer e o parâmetro opcional inicio (2) de onde começa a busca, ou seja, desejamos saber o índice do elemento 12 a partir do segundo 12

console.log(arr.indexOf(2,3))

console.log(arr.indexOf(237))

console.log(arr.indexOf(34))
console.log(arr.indexOf(34,2))