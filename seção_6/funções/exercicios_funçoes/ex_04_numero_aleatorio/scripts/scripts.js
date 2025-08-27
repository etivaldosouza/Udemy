/*
    => Escreva uma função que retorne um numero aleátorio
    => O número máximo retornado deve ser passado via parâmetro]
    => dica: utilize Math.random()

*/ 

function sorteio(x){
    return Math.random(x)  * 10

}

console.log(sorteio(10))