/*
    Alterando o DOM com insertBefore

=> Insere um nó antes do nó de referência do método;

=> Precisamos de um elemento para ser adicionado;


=> O elemento que terá o outro elemento adicionado antes dele;

*/ 


let elemento = document.createElement('h2')

let txt = document.createTextNode('TEXTO CRIADO PELO DOM')

elemento.appendChild(txt)

let elementoReferencia = document.querySelector('div2 p')

let pai = document.querySelector('.div2')

pai.insertBefore(elemento,elementoReferencia)


