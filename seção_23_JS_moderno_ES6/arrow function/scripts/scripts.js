/*
    Arrow Functions

=> A arrow function é um recurso para criar funções de forma mais simples;

=> Mas ela não funciona exatamente como uma function em todos os aspectos;

=> O this da arrow function é relacionado ao elementro pai de quem está a executando

=> Vamos ver na prática


*/ 


const sum = function sun(a,b){ // funcao normal
    return a + b
}

console.log(sum(2,3))



// arrow function 1

const arrowSum = (a,b) => {  // arrow funtion
    return a + b
}

console.log(arrowSum(2,3))


//=================================

const greeting = (name) => {

    if(name){
        return `olá ${name}!!` 
    }else{
        return `olá!`
    }

}

console.log(greeting())
console.log(greeting('Matheus'))


//=======================================

// maneira 2

const arrowSoma = (a,b) => a + b

const resultado = arrowSoma(2,3)

console.log(resultado)


//==================

const message = (msg) =>  `ola ${msg}`

console.log(message('bom dia'))


//===============================

// maneira 3 - sem argumento

const testeArrow = () => console.log('Seja Bem Vindo!!')

testeArrow()




