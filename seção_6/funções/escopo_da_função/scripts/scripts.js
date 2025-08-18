/*
    Escopo de uma Função:

=> o que acontece dentro de uma função fica separado do escopo global

=> o escopo global seria todo o arquivo de JavaScript.

=> atualmente com o uso do let ñ é mais possivel alterar a variável no escopo global. caso queira alterar a variável, tem que ser alterado no proprio escopo
no caso do exemplo abaixo caso queira alterar o valor da variavel globlal let n = 10  alteramos nele mesmo.

*/

let n = 10

const numero = function(){ 
    let n = 25
    console.log(n)
}

// let n = 30 ñ é posivel alterar a variavel globlal, o programa dá erro.(era possível apenas c/var)

numero() // vai imprimir o valor da variavel  n de dentro da função

console.log(n) // imprime a variável do escopo global(do programa,q é a aplicação toda)