// 01 - função normal sem argumentos

function imprimirNoConsole(){
    console.log('Olá Mundo')
}

imprimirNoConsole()

//=================================================//
// 02 - função com argumentos

function imprimirNumeros(n1,n2){
    console.log(`os números são ${n1} e ${n2}`)
}

imprimirNumeros(10,30)


//====================================================//
// 03 anônima: função como valor de uma variável

const numerosAleatorios = function(){
    console.log(Math.random()) // gera um numero aleatório
}

numerosAleatorios()
numerosAleatorios()

//======================================================//

// com arredondamento

const numerosAleatorios = function(){
    const num = Math.random() * 10  // gera um nr aleatorio entre 0 e 10
    console.log(Math.round(num)) // Arredonda o número para o inteiro mais próximo
}

numerosAleatorios()
numerosAleatorios()
numerosAleatorios()