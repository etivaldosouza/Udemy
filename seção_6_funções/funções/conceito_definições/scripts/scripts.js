/*
    o que são Funções?

 => são estruturas de códigos menores que são reaproveitadas durante a execução/construção de um programa

 => Principal objetivo: evitar repetição de código

 => podem ser consideradas subprogramas.

   
*/ 


/*
    definindo uma função:

=> uma função tem uma estrutura um pouco mais complexa do que um if ou while por exemplo

=> devemos declarar a função com a palavra function

=> um função "deve" ter um nome

=> pode conter argumentos/parâmetros, definidos entre ()

=> o corpo da função é definido entre {}

=> geralmente uma função retorna um valor ñ é obrigatório.

=> é possível delcarar funções em váriáveis;


*/ 

// ex01:

function escreverNoConsole(){   // É uma boa prática usar nomes  que descrevam o que a função faz.
    console.log('escrevendo no console')
}

escreverNoConsole() // chamando ou executando a função

/*
    As chaves delimitam o bloco de código da função. Tudo o que estiver dentro delas será executado quando a função for chamada. No exemplo acima, o único comando é console.log('escrevendo no console').

    Para executar o código dentro da função, você precisa chamá-la usando o nome dela, seguido pelos parênteses.
    Quando o JavaScript encontra essa linha, ele vai procurar a função com esse nome e executar o bloco de código que está dentro dela.
    No Exemplo, a chamada escreverNoConsole() fará com que o texto 'escrevendo no console' seja exibido no console do navegador ou do Node.js.
*/ 

// ex02: uma função como variável sem parâmetro
// quando uma função está dentro de uma variável, ñ tem nome, é chamada de anônima

/*
    Abaixo, a função é tratada como um valor e é atribuída a uma constante chamada textoNoConsole.

    A sintaxe function() sem nome é chamada de função anônima, pois ela não tem um nome próprio. Ela só pode ser referenciada pelo nome da variável à qual foi atribuída.

    O comportamento é exatamente o mesmo: a constante textoNoConsole agora armazena a lógica para imprimir 'Texto no Console'.

*/ 

const textoNoConsole = function(){
    console.log('Texto no Console')
}

textoNoConsole() // chamando,invocando ou executando a função


// ex03: função com parâmetro:

const textPorParametro = function(a){
    console.log(a)
}

textPorParametro('Testando por parâmetro')

/*
    O a dentro dos parênteses é um parâmetro. Ele funciona como uma variável local que só existe dentro da função. Quando você chama a função, o valor que você passa é atribuído a esse parâmetro.

    console.log(a): O corpo da função simplesmente imprime o valor do parâmetro a no console.

    Para usar essa função, você precisa passá-la um valor quando a chamar.

    Em resumo, essa função é mais flexível porque não tem um valor fixo para imprimir. Ela imprime o que for passado a ela como argumento no momento da chamada.
*/ 