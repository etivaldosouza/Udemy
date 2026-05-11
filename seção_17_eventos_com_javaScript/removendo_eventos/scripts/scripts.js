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

/*

quando estamos usando o remove somos obrigados a usar uma funcao externa. que foi o caso da function msg.

Quando você usa addEventListener, o JavaScript precisa “guardar” qual função foi adicionada para depois conseguir remover ela.

O JS guarda a referência da função msg.

E depois conseguimos remover:

but.removeEventListener('click', msg)

Agora ele sabe exatamente qual função apagar.

*/ 