/*
    Criando Elemento:

=>  Podemos criar um nó de elemento com o creatElemet, e depois inserir no HTML.

*/ 

let elemento = document.createElement('img')

let referencia = document.querySelector('#titulo-principal')

let pai = document.querySelector('#container-principal') //*

pai.insertBefore(elemento,referencia)


/*
    posso usar:

    let pai = referencia.parentNode (o DOM ja identifica o pai automaticamente)

*/