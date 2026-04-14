/*
    Alterando o DOM com replaceChild

=> troca um antigo elemento no DOM, por um novo.   

*/ 


let novoElemento = document.createElement('h1')

let txt = document.createTextNode('Novo Texto')

novoElemento.appendChild(txt)

let antigoElemento = document.querySelector('#paragrafo-principal')

let pai = antigoElemento.parentNode

pai.replaceChild(novoElemento,antigoElemento)
