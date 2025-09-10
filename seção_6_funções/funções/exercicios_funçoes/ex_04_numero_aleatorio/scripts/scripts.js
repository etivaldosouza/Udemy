/*
    => Escreva uma função que retorne um numero aleátorio
    => O número máximo retornado deve ser passado via parâmetro
    => dica: utilize Math.random()

*/ 

function sorteio(x){
    let sort = Math.random() * x//sorteia um numero entre 0 e x
    return Math.round(sort) // arredonda o número

}

console.log(sorteio(100)) // utilizando parâmetro
console.log(sorteio(10))
console.log(sorteio(5))



//===================/ / SEM PARÂMETRO / /======================================//

function sorteio(){
    let sort = Math.random()  * 5 //sorteia um numero entre 0 e 5
    return Math.round(sort) // arredonda o número

}


console.log(sorteio())


//================================================================================//

function numAleatorio(x){
    return Math.floor(Math.random() * x) // floor(arredonda p/ baixo por isso é explusive(ñ entra o ultimo nr))
}

console.log(numAleatorio(6)) // vai gerar um nr aleatório de 0 a 6 exclusive(ou seja ñ entra o 6)

//obs: p/ incluir o ultimo nr a solução seria usar o + 1(return Math.floor(Math.random() * x) + 1)
//=========================================================================================//


function sorteio(){

    return Math.ceil(Math.random() * 10) //sorteia um numero entre 1 a 10(arredondando p/ cima ñ entrando o 0) 

}

console.log(sorteio())