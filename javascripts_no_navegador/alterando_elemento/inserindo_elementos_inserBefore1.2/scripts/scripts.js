/*
    Alterando o DOM com insertBefore

=> Insere um nó antes do nó de referência do método;

=> Precisamos de um elemento para ser adicionado;


=> O elemento que terá o outro elemento adicionado antes dele;

*/ 


let novoElemento = document.createElement('p') //elemento a ser criado

let ref = document.querySelector('#titulo-principal') // elemento de referência

let pai = document.querySelector('#container-principal')

pai.insertBefore(p,ref)

