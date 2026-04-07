/*
    Alterando o DOM com insertBefore

=> Insere um nó antes do nó de referência do método;

=> Precisamos de um elemento para ser adicionado;


=> O elemento que terá o outro elemento adicionado antes dele;


=> E o elemento que terá o outro elemento adicionado antes dele

*/ 


let span = document.createElement('span') //elemento a ser criado

let elemento = document.querySelector('#h1') // elemento de referência

let pai = elemento.parentNode 

pai.insertBefore(span,elemento)

