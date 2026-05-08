/*
    Removendo eventos:

=> Da mesma forma que podemos adicionar eventos,podemos remover quando acharmos necessário.

=> Para isso utilizamos o método removeEventListtener, onde passamos o evento e a função que o evento está escutando;

*/ 


let but = document.querySelector('#butao')

function msg(){
    alert('vc clicou')
}

but.addEventListener('click',msg)

setTimeout(function(){
    but.removeEventListener('click',msg)
},3000)

