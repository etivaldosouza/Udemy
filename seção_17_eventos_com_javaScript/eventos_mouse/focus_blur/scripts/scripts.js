/*
    Eventos por foco

=> Quando focamos em um elemento ou saímos dele, podemos também atrelar um evento a esta ação.

=> Focus para quando um elemento recebe foco e blur quando o elemento perde;

*/ 

let inpt = document.querySelector('input')


function alerta(){
    console.log('focus no input')
}
inpt.addEventListener('focus',alerta)

inpt.addEventListener('blur',function(){
    console.log('foco no blur')
})