/*
    Movimento do mouse - mousemove

=> Podemos também ativar eventos com a movimentação do mouse(mousemove); 

=> Através desse evento podemos detectar posição do ponteiro do mouse na tela;

*/ 


function msg(){
    alert('vc mexeu o mouse')
    
    window.removeEventListener('mousemove',msg)
}


window.addEventListener('mousemove',msg)

