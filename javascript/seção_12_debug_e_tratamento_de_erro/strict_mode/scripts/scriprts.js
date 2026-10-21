
/*
    Strict mode

=>  Deixa o JavaScripts mais rigoroso na hora de se programar

=>  Deve ser colocado no topo de arquivos ou funções

=>  Colocar o strict ajuda você a codificar de forma correta e não vai impedir/limitar nada no seu software ou programar

=> Veja o exemplo de uma variável declarada sem let/const/var:

*/


// inicio do código:

'use strict' 

opa = 'teste'


//dentro de funções:

function teste(){
    'use strict'
    testando = 'teste'
}

teste()



'use strict'
false.prop = ''  // ñ posso definir propriedades com valores primitivos
'teste'.prop = ''   


/*
 resumindo: se quisermos melhorarmos a qualidade do código aconselha-se usar o strict que irá deixar o código
 mais 'correto' e não vai alterar em nada o codigo.
*/ 