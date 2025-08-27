/*
    Estrutura básica de uma função recursiva:

*/ 

function exemplo() {
    // Condição de parada (quando parar a recursão)
    if (alguma_condicao) {
        return; 
    }

    // Chamada recursiva (a função chama a si mesma)
    exemplo();
}

//Se não existir condição de parada, a função chama a si mesma infinitamente → causando um estouro de pilha (stack overflow).

// Exemplo prático: Contagem regressiva


//================================================================//

function contagem(n){
    console.log(n)

    //condição de parada:
    if(n == 0){
        return  //encerra a função
    }
    //chamada recursiva (diminui o numero)
    contagem(n-1)
}

contagem(5)
contagem(10)


//=====================================================//

function recursao(n){

    if(n - 1 < 2){
        console.log('Recursão parou')

    }else if(n % 2 != 0){
        console.log(`${n} é número ímpar `)
        recursao(n - 1)

    }else {
        console.log(`${n} é número par `)
        recursao(n - 2)
    }
}

recursao(39)
recursao(10)

// explicando linha por linha

function recursao(n){

    //Condição de parada: quando n - 1 for menor que 2, a recursão para
    if(n - 1 < 2){
        console.log('Recursão parou')

    //Caso o número seja ímpar:

    }else if(n % 2 != 0){
        console.log(`${n} é número ímpar `)

        //Chama a função de novo, diminuindo 1 (para cair em um número par)
        recursao(n - 1)

    //Caso o número seja par:

    }else {
        console.log(`${n} é número par `)

        // Chama a função de novo, diminuindo 2 (mantém apenas os pares)
        recursao(n - 2)
    }
}

//Exemplo 1: começa em 39 (ímpar)
recursao(39)

//Exemplo 2: começa em 10 (par)
recursao(10)


// contagem regresiva


function contagemRegressiva(n){
    if(n <= 0){
        console.log('Fim')
    }else if(n - 1){
        
    }
}