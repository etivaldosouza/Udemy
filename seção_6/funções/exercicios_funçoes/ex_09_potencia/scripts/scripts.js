/*

=>  Escreva uma função que receba dois números, o primeiro é a base e o segundo a potência
    
=>  depois faça essa operação e retorne o resultado

=>  exemplo: 3, 2 = 9


*/ 

function potenciacao(a,b){
    return Math.pow( a,b)
}

console.log(potenciacao(3,2))
console.log(potenciacao(2,4))
console.log(Math.pow(2,4))


//================= Outra Maneira ========================//

function potencia(a,b){
    let pot = Math.pow(a,b)
    console.log(pot)
}

potencia(3,2)
potencia(2,4)
potencia(3,3)
potencia(4,2)


//================= Outra Maneira ==============================//

function potencia(a,b){
    return a ** b
}

console.log(potencia(2,3))
console.log(potencia(2,4))
console.log(potencia(3,3))