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
    alert('Ñ VAI ABRIR A PÁGINA')
})