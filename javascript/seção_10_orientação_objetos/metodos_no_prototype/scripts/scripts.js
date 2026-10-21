/*
    Classes: construtor com método

=> Além de propriedades, podemos criar a classe base já com métodos

=> Basta definir ao prototype o método desejado

*/


function Cachorro(racaDoCachorro){

    this.raca = racaDoCachorro

}

Cachorro.prototype.latir =  function(){

    console.log('AuAuAu!!!')
}

let pug = new Cachorro('Pug')

console.log(pug)

pug.latir()



//============================= mais exercicios ================================//


function Cachorro(racaDoCachorro){

    this.raca = racaDoCachorro

}

Cachorro.prototype.latir =  function(){

    console.log('AuAuAu!!!')
}

Cachorro.prototype.uivar = function(){
    console.log('AuuuUUU')
}

let pug = new Cachorro('Pug')

console.log(pug)

pug.latir()
pug.uivar()