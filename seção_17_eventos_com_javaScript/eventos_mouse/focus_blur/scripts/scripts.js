/*
    Eventos por foco

=> Quando focamos em um elemento ou saímos dele, podemos também atrelar um evento a esta ação.

=> Focus para quando um elemento recebe e blur quando o elemento perde;

*/ 

let inpt = document.querySelector('input')


function alerta(){
    alert('focus no input')
    setTimeout(function(){
        return alerta
    },5000)
}
inpt.addEventListener('focus',alerta)

inpt.addEventListener('blur',function(){
    alert('foco no blur')
})