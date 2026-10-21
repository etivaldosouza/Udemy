/*
    Outros eventos de mouse

=> No mouse temos também eventos como mousedow e mouseup, semelhante aos das teclas;

=> mousedown(apertar) mouseup(soltar)


=> Dblclick para ativar com dois cliques;
                        
*/ 

let butao = document.querySelector('#butao')

function msg(){
    console.log('vc segurou o click')
}

butao.addEventListener('mousedown',msg)

butao.addEventListener('mouseup',function(){
    console.log('Vc soltou o click')
})
