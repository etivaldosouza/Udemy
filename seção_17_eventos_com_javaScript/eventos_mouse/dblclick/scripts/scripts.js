/*
    Outros eventos de mouse

=> No mouse temos também eventos como mousedow e mouseup, semelhante aos das teclas;

=> Dblclick para ativar com dois cliques;
                        
*/ 

let but = document.querySelector('#butao')
let alerti = document.querySelector('#alerta')


function msg(){
    alerti.classList.remove('hidden') // a classe hidden passa a exibir a mensagem
}

but.addEventListener('dblclick',msg) 


 
