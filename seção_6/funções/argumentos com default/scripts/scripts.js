/*
    Argumentos com Valor default

=> podemos pré-determinar um valor para um argumento


*/


function repetirFrase(frase, n = 2){
    for(let x = 1; x <= n; x++){
        console.log(`${frase}  ${x} `)
    }
}

repetirFrase('Testando', 5)

repetirFrase('só duas vezes')


function potencia(base, exp = 2){ //criei valor default
    return Math.pow(base,exp)
}

console.log(potencia(3)) // quando uso apenas um argumento eu irei pegar o valor default criado acima(exp = 2)
console.log(potencia(4,2))
