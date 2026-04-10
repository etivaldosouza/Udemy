/*
    Alterando o DOM com appendiChild

=> Adiciona um nó após os elementos do elemento pai especificado.

=> ou seja, serve para adicionar elemento como último elemento filho de um elemento pai especificado.

*/ 

// crio elemento novo
let novoElemento = document.createElement('p')

// crio um nó de texto para adicionar no novo elemento
let texto = document.createTextNode('parágrafo criado pelo DOM')

// adiciono o texto criado ao novoElemento
novoElemento.appendChild(texto)

// identifico o elemento de referencia
let elementoReferencia = document.querySelector('#paragrafo-principal')

// identifico o elemento pai do elemento de referencia
elementoPai = elementoReferencia.parentNode

// adiciono o elemento novo após os elementos do elemento pai
elementoPai.appendChild(novoElemento)