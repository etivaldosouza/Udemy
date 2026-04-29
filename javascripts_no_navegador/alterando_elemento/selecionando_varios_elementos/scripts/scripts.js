/*
    Selecionar vários elementos com query

=> Para selecionar diversos elementos com query, podemos utilizar querySelectorAll

=> Em vez de um, podemos pegar todos os elementos semelhantes com o seletor do css.


*/


let varios = document.querySelectorAll('.itens-vermelho')

console.log(varios)

varios[0].style.color = 'red';

let item = document.querySelectorAll('.itens')

console.log(item)
item[0].style.color = 'blue'


let elemento = document.getElementsByClassName('itens')

let novaClass = 'item'

elemento.setAttribute('class',novaClass)