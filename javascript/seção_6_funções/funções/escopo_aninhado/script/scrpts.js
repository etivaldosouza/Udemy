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


let a = 10 // variável de escopo global

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

/*

 => uma função cria um escopo local dentro do seu corpo(bloco). fora das funções existe o escopo global.
 
 => nesse sentido, podemos dizer que em um script poderiam existir vários escopos locais(funções) aninhados em um escopo global.

*/ 

let x = 5
console.log(x)

let x = 10 // causa erro pois a variável já foi declarada antes
console.log(x)


// com escopo de bloco

let x = 5

{ // as "chaves" cria o escopo de bloco

    let x = 10 // escopo local. o x pertecem a escopos diferentes
    console.log(x)
}

console.log(x)

/*
    dentro de um mesmo escopo, variáveis declaradas com uso de let não podem ter seu valor alterado(redefinido).
    esse comportamento evita que o desenvolvedor inadvertidamente sobrescreva o valor de uma variável.

*/ 


//=====================================================================================================//


//hoisting

function mensagem(texto) {
    console.log(texto)
}

mensagem("olá mundo!")



mensagem("olá mundo!")

function mensagem(texto) {
    console.log(texto)
}

//======================================================================//

let a // => estou declarando a variarvel a 

let a = 10 // => estou inicializando a variável a(atribuindo um valor a variável a)

const a  // declarei a variavel(dei um nome a ela) porém ñ inicializei( ñ atribuir um valor a esse nome)
console.log(a)

/*

variáveis declaradas com uso da palavra reservada const se comportam exatamente como aquelas declaradas com uso do let, exceto que elas não podem assumir valores diferentes daquelas que foi atribuido quando inicializadas. elas se destinam a armazenar valores constantes. 

usar let permirte alterar o valor da variável , mas impede que ela seja redeclarada, e usar const impede tanto a alteração como a redeclaração do valor.
*/ 

let x = 5

x = 3 // com let eu posso alterar o valor da variável porém ñ posso redeclarar

console.log(x)



const x = 3

x = 10 // vai dá erro(com const ñ posso alterar a variável e nem redeclarar)

console.log(x)

