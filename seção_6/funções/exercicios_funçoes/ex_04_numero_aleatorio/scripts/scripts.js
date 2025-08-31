/*
    => Escreva uma função que retorne um numero aleátorio
    => O número máximo retornado deve ser passado via parâmetro]
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