/*
    Posição do Elemento na tela:

=>  Também é possível checar a posição do elemento na tela

=> getBoundingClientRect nos da as posições de top,left,rigth,bottom do elemento e outras informações;

*/ 


let elemento = document.querySelector('#titulo-principal')

console.log(elemento.getBoundingClientRect())


