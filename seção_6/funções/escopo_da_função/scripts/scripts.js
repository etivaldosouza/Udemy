/*
    Escopo de uma Função:

=> escopo de uma variável é a região do script onde a variável é conhecida, ou seja, seu valor poderá ser acessado somente dentro daquela região.

=> o que acontece dentro de uma função fica separado do escopo global

=> o escopo global seria todo o arquivo de JavaScript.

=> atualmente com o uso do let ñ é mais possivel alterar a variável no escopo global. caso queira alterar a variável, tem que ser alterado no proprio escopo
no caso do exemplo abaixo caso queira alterar o valor da variavel globlal let n = 10  alteramos nele mesmo.


*/

let n = 10

const numero = function(){ 
    let n = 25              //variável de escopo local
    console.log(n)
}

// let n = 30 ñ é posivel alterar a variavel globlal, o programa dá erro.(era possível apenas c/var)

numero() // vai imprimir o valor da variavel  n de dentro da função

console.log(n) // imprime a variável do escopo global(do programa,q é a aplicação toda)

// variáveis do escopo global podem ser acessadas em todas as regiões do script exceto dentro de funções.


//============================================================================================//

let a = 1 // variável de escopo global

function escopo(){
    console.log(a) // vai dá erro pois a variavel é de escopo local e ñ foi definida antes
    var a = 5
    console.log(a)
}

 
escopo()


/*

 uma função cria um escopo local dentro do seu corpo(bloco). fora das funções existe o escopo global.
 nesse sentido, podemos dizer que em um script poderiam existir vários escopos locais(funções) aninhados em um
 escopo global.

*/ 