/*
        Estrutura de Controle:

=> Um programa é executado de cima para baixo
o que escreve primeiro é executado primeiro

=> com as estruturas podemos modelar p fluxo do programa

=> ou seja, dependendo dos valores de statements e expressions, ele tomará um caminho diferente

*/ 

/*
        Estrutura condicional: if

=> o programa vai executar um bloco de código, se algo acontecer;

=> onde algo é a condição imposta por um statement

=> que resultar em um boolean(true or false)
    
*/ 


let idade = 18

if(idade >= 18) {
    console.log('Pode entrar!')
}

let idade = 18

let nome = 'Etivaldo'
if(idade > 15 && nome == 'Etivaldo'){
        console.log(`você é o ${nome}, tem ${idade} anos e está liberado para entrar!`)
}


let idade = 10
let passaporte = false
let nome = 'Etivaldo'

if((idade < 15 && nome != 'Etivaldo') || passaporte == true){
        console.log(`você é o ${nome}, tem ${idade} anos e está liberado para entrar!`)
}

// ñ irá imprimir nada pois as condições não são verdadeiras