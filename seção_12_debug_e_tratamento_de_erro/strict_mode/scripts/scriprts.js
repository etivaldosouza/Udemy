
/*
    Strict mode

=>  Deixa o JavaScripts mais rigoroso na hora de se programar

=>  Deve ser colocado no topo de arquivos ou funções

=>  Colocar o strict ajuda você a codificar de forma correta e não vai impedir/limitar nada no seu software ou programar

=> Veja o exemplo de uma variável declarada sem let/const/var:

*/


// inicio do código:

//'use strict' 

opa = 'teste'


//dentro de funções:

function teste(){
    'use strict'
    testando = 'teste'
}

teste()