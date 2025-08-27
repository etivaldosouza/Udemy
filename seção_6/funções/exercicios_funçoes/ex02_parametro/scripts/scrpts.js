/*
    escreve uma função que recebe parâmetro de idade e imprima esta mensagem no console com template literals dizendo "voçê tem x anos "
*/ 


function idade(x){
    let id = x
    console.log(`você tem ${id} anos`)

}

idade(18)
idade(10)

//========/ / maneira 2 / /======================//

function idade(x){

    console.log(`você tem ${x} anos`)

}

idade(15)
idade(20)
idade(30)