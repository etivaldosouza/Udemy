/*
    Mais Sobre Escopo

=> Atualmente com let e const, qualquer bloco de código pode separar seu escopo(utilizando 
o if, por exemplo)

=> Isso é muito bom pois separa os contextos, com var isso ñ acontecia

=> ou seja, podemos ter escopos diferente ñ só com funções

*/



let x = 10 // variável x declarada no escopo global com valor 10

if(true){ 
    let x = 20 // aqui é criada uma nova variável x, mas só existe dentro do bloco if
    console.log(x)
}

console.log(x) // imprime 10


// O if (true) sempre vai executar o bloco de código dentro dele.

// Dentro do bloco if, você faz let x = 20.

// Aqui não está mudando a variável x de fora! Está criando uma nova variável x, válida apenas dentro desse bloco ({ ... }). Isso acontece porque let tem escopo de bloco.

// console.log(x) dentro do if imprime 20, pois ele pega a variável local do bloco.

// Fora do if, a variável x continua sendo a do escopo global (que vale 10).]

// Por isso, console.log(x) imprime 10.


let x = 10

if( x > 5){ // bloco if é um escopo diferente do escopo global
    let x = 20
    x++
    console.log(x)
}

console.log(x)


/*

o que a ES6 introduziu de novidade na especificação foi criar novas regiões definidoras de escopo local que antes eram exclusivas às funções. para facilitar o entendimento, podemos dizer que existem novas formas,além de funções, para se criar um escopo local.

em um script, as declarações de variáveis com uso de let e const que estejam contidas entree os sinais abre e fecha chaves ({}) pertencem ao escopo de bloco. funções e loops são exemplos onde se criam tal escopo.

*/