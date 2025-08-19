/*
        Escopo aninhado

=> Por causa da possibilidade de criar um escopo, podemos ter mais níveis de escopo

*/

let y = 5

const multiplicar = function(n){

    let y = n * 2

    console.log(y) // escopo da função

    if( y == 10){
        let y = 55
        console.log(y) // escopo if dentro da função
    }
}

multiplicar(3)

console.log(y) // imprime variável do escopo global



//=======================================================//


let a = 10

function multiplicar(x,y){ // (3,7)

    let a = x * y   // variável de escopo da função

    a++             // 21 + 1 = 22

    if(a > 10){ // true, pq a = 22 ( se 22 > 10 é true, então a vai valer 0)

        let a = 0 // variável do escopo do if

        a++        // 0 + 1

        console.log(a) // imprime a variável do escopo do if
    }

    console.log(a) // imprime a variável do escopo da função
}


multiplicar(3,7) // chama a função multiplicar

console.log(a) // imprime a variável do escopo global