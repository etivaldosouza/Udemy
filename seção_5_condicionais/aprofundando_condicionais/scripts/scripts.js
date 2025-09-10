/*
    crie uma função chamada classificarNumero que recebe um numero inteiro como argumento

=> a função deve retornar uma string com a classificação do número de acordo com as seguintes regras:

* se o número for positivo e par, retorne "positivo e par"

* se o número for positivo e impar, retorne "positivo e impar"

* se o número for negativo, retorne "negativo"

* se o número for zero retorne "neutro"

*/ 


function classificarNumero(x){
    if( x > 0 && x % 2 === 0){
        return "positivo e par"
    }else if( x > 0 && x % 2 != 0){
        return "positivo e ímpar"
    }else if( x < 0){
        return "negativo"
    }else{
        return "neutro"
    }
}

console.log(classificarNumero(1))
console.log(classificarNumero(100))
console.log(classificarNumero(103))
console.log(classificarNumero(3))
console.log(classificarNumero(-10))
console.log(classificarNumero(-103))
console.log(classificarNumero(0))