/*
    Mais sobre Arrow Functions

=> se só tem um parâmetro podemos remover os parênteses do argumento

=> se a expressão for pequena, pode até ser feita em uma linha sem prejudicar a leitura do código


*/ 


const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQuadrada(2))



// 2ª maneira mais simplificada:


const raizQuadrada2 = n => n * n;

console.log(raizQuadrada2(3));


//================================================//

const multiplicar = x => x * 2

console.log(multiplicar(5))