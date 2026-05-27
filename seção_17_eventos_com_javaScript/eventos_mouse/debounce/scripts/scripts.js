/*
    Eventos de carregamento

=> Podemos atrelar um evento quando a página carrega,pelo evento load.

=> E antes do usuário fechar a página pelo eventobeforeunload


=> beforeunload é para quando o usuário está com alguma infomação salva na tela e mas ainda não salvou no banco de dados.
*/ 

/*

window.addEventListener('load',function(){     // quando carrega a página
    alert('Seja Bem vindo!!')
})

*/ 



window.addEventListener('beforeunload',function(e){
    event.returnValue = null
})