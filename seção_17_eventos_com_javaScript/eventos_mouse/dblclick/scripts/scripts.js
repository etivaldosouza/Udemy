/*
    Outros eventos de mouse

=> No mouse temos também eventos como mousedow e mouseup, semelhante aos das teclas;

=> Dblclick para ativar com dois cliques;
                        
*/ 

let but = document.querySelector('#butao')
let alerta = document.querySelector('#alerta')


function msg(){
    alerta.classList.remove('hidden')
}

but.addEventListener('dblclick',msg) 


 
