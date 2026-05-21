/*
    Outros eventos de mouse

=> No mouse temos também eventos como mousedow e mouseup, semelhante aos das teclas;

=> Dblclick para ativar com dois cliques;
                        
*/ 

let but = document.querySelector('#butao')


function msg(){
    alert('VC CLICOU DUAS VEZES')
}

but.addEventListener('dblclick',msg)


