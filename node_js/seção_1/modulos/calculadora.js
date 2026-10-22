/*
 deixando a função disponível para qualquer parte(arquivo) do meu programa

=> para eu utilizar qualquer coisa(uma função, uma variável, etc) desse arquivo(modulo) calculadora.js, eu tenho que adicionar o comando module.exports(exportar)

=> a partir disso a função, variavel, etc estará disponivel para uso em qualquer parte do programa.


*/

var nome = 'Minha Calculadora'


function soma(a,b){
    return a + b
}

function multi(a,b){
    return a * b
}
function sub(a,b){
    return a - b
}

function div(a,b){
    return a / b
}

module.exports = {

    soma,sub,multi,div,nome    // estou exportando todas as funções e uma variavel.

}                    

