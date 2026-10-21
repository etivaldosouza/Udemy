/*
    Movimento do mouse - mousemove

=> Podemos também ativar eventos com a movimentação do mouse(mousemove); 

=> Através desse evento podemos detectar posição do ponteiro do mouse na tela;

*/ 


function msg(e){
    console.log('X:',e.x)
    console.log('Y:',e.y)
}


window.addEventListener('mousemove',msg)

