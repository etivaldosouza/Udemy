/*

=> uma function é um tipo de valor javascripts assim como são as strings,os números, os arrays,  os objetos. então, se é um tipo de valor, eu consigo armazenar uma function em uma variável.

=> 
*/ 

var subtraiNumeros = function calcular(a,b){
    return a - b
}

var resultado = subtraiNumeros(10,2)
console.log(resultado)

//obs: apesar da função ter um nome, esse nome ñ serve pra nada pois devo chamar a função pelo nome da variável; pois, se a variável recebe uma função então essa variável é uma função logo ao chamar a função devo chamar pelo nome da variavel. logo o nome calcular é dispensavel.


var subtraiNumeros = function(a,b){ 
    return a - b
}

console.log(subtraiNumeros(10,3))