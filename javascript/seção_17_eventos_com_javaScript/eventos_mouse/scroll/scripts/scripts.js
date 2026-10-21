/*
    Eventos por scroll

=> Podemos atrelar evento ao scroll da tela também, pelo evento scroll

=> Por Exemplo: podemos criar um elemento assim que o scroll atingir uma posição x;

*/ 

function rolar(e){
    if(window.pageYOffset > 1000){
        alert('Ativou!!')
    }
}

window.addEventListener('scroll',rolar)


/*

    pageYOffset é a distancia de cima da tela p/ baixo

*/ 