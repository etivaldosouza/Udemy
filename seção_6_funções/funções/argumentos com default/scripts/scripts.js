/*
    Argumentos com Valor default

=> podemos pré-determinar um valor para um argumento


*/


function repetirFrase(frase, n = 2){
    for(let x = 1; x <= n; x++){
        console.log(`${frase}  ${x} `)
    }
}



repetirFrase('só duas vezes')
repetirFrase('Testando', 5)


function potencia(base, exp = 2){ //criei um valor default(exp = 2)
    return Math.pow(base,exp)
}

console.log(potencia(3)) // quando uso apenas um argumento eu irei pegar o valor default criado acima(exp = 2)
console.log(potencia(4,2)) // como os dois parâmetros foram passados usa-se eles.
console.log(potencia(2,3))
