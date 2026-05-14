/*
    Ações default

=> Muitos elementos/teclas já tem ações pre-definidas, como clicar num link que nos leva a outra página

=> Podemos parar este evento default, e criar uma lógica diferente para o elemento em questão;

método: preventDefault()

*/ 

let link = document.querySelector('a')
let dv = document.querySelector('div')


/*
    MANEIRA 1:

function msg(e){
    alert('Ñ VAI ABRIR A PÁGINA')
    e.preventDefault()
}

link.addEventListener('click',msg)

*/


// MANEIRA 2:

link.addEventListener('click',function(e){
    e.preventDefault()
    e.stopPropagation()
    alert('Página em Manutenção...')
})

dv.addEventListener('click',(e)=>{
    alert('clicou na div')
})

/*
 no evendo do link observe que além de eu usar um preventDefault para barrar o evento padrão(default) dele que seria abrir uma página ao clicar no link eu adicionei também o metódo stopPropagation() para evitar do evento do elemento pai(div) ser acionado.

*/ 