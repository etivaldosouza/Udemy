/*
    Criando nós de texto:

=>  Podemos criar um nó de texto puro e inserir em um elemento.

*/ 

let texto = document.createTextNode('COM TEXTO')

let semTexto = document.getElementById('sem-texto')

semTexto.appendChild(texto)

