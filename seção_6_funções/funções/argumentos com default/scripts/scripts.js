/*
    Argumentos com Valor default

=> podemos pré-determinar um valor para um argumento


*/


function repetirFrase(frase, n = 2){
    for(let x = 1; x <= n; x++){
        console.log(`\n${frase}  ${x}\n`)
    }
}



repetirFrase('só duas vezes')
console.log('======= TESTE ==============')
repetirFrase('Testando', 5) // como existe o segundo argumento então é ele q vai valer como parâmetro


function potencia(base, exp = 2){ //criei um valor default(exp = 2)
    return Math.pow(base,exp)
}

console.log(potencia(3)) // quando uso apenas um argumento eu i
// rei pegar o valor default criado acima(exp = 2)
console.log(potencia(4,2)) // como os dois parâmetros foram passados usa-se eles.
console.log(potencia(2,3))



//===========================================================================//



function repetirMSg(frase, n = 5){
    for(let i = 1; i <= n; i++ ){
        return `${frase} - ${i} ` 
    }
}

console.log((repetirMSg('olá mundo')))




function repetirMSg(frase, n = 5){

    let resultado = ''

    for(let i = 1; i <= n; i++){
        resultado += `${frase} - ${i}\n`
    }
    return resultado
}

console.log(repetirMSg('olá mundo'))



