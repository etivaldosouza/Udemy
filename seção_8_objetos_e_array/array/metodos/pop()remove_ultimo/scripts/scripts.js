/*
    Método POP

=> remove o último elemento do array e retorna o valor que foi removido

*/ 


let pessoas = ['Matheus', 'João', 'Ricardo']

let pessoaRemovida = pessoas.pop()

console.log(pessoaRemovida)

console.log(pessoas)



const arr = [1,2,"a","b",2,"c",1,"a","45"]

const x = arr.pop()

console.log(x)

console.log(arr)







//metodo moderno(ES6) para acessar elementos de um array

// (destructuring)

let pessoas = ['Matheus', 'João', 'Ricardo']

let [nome1,nome2,nome3] = pessoas

console.log(nome1)
console.log(nome2)
console.log(nome3)