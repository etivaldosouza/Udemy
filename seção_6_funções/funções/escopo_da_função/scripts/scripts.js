
/*

Escopos:

=>  em JavaScript escopos define a visibilidade das nossas variáveis e funções ou seja, dependendo onde se declara as variáveis e funções, ou seja, dependendo do escopo das quais ela pertence ela pode ser visiveis em outros lugares. 

resumindo: escopo seria o local onde se declara a variável
    
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

// n = 20 => dessa forma consigo alterar o valor da variável global pois quando ñ se utiliza a palavra reservada (let/var) antes do nome da variável siguinifica q a variável está sendo reconhecida como variavel global. nesse caso só é possivel alterar a variavel globla caso ela esteja sendo usada com a palavra reservada var ou let. caso esteja sendo usada com const ñ será posível alterar a variavel global dessa forma, apenas poderá alterá lá onde ela foi inicializada inicialmente.

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

/*
relembrando:

let n => declarando uma variável(atribuindo um nome)

let n = 20 => inicializando uma variável(atribuindo um valor ao nome.)

*/ 



function imprimePais(){
    pais = 'Brasil'       //como ñ usou a palavra reservada let/var a variavel se torna global 
    console.log(pais)
    this.pais = 'italia' // estou alterando a variavel do objeto que ela faz parte
}

imprimePais()
console.log(pais)




if(true){
    var youtube = 'ProgramadorAbordo'
    let autor = 'Ayrton'   // variavel inicializada com a palavra reservada let vai funcionar como variavel de escopo local
}

console.log(youtube)

console.log(autor) // vai dá erro pois a variável é de escopo local

