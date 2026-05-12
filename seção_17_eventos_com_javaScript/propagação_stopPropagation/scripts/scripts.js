/*
    Propagação

=> Quando não definimos um elemento muito bem(seletor brando) ou um elemento que está dentro de outro tem um evento;

=> Pode acontecer a propagação, ou seja, o outro elemento ativar  um evento também, aí teremos uma duplicação;

=> Por isso temos um método que para esta propagação e resolve este problema, o stopPropagation;

*/ 

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let p = document.querySelector('p')

function msg(e){
    alert('clicou no botão')
    e.stopPropagation()// evita que ao clicar no botao ative o evendo do parágrafo também
}

btn1.addEventListener('click',msg)

btn2.addEventListener('click',function(evento){
    console.log(evento)
})

p.addEventListener('click',()=>{
    alert('clicou no parágrafo')
    
})