/*
    Promise

 Explicação estrutural:

=>  Promise recebe uma função f como argumento.

=> Esta Função f por sua vez recebe como argumento duas funções g e h(opcional)

=> se durante a execução da lógica da função f, a função g for chamada com o argumento P(opcional), então o estado da promise mudará para fullfiled(resolvida), e o resultado da promise será o valor P.

=> Se durante a execução da lógica da função f, a função h for chamada com o argumento Q(Opcional), então o estado da promise mudará para reject(rejeitada), e o resultado será o valor Q.

=> O método then de uma promise recebe como argumento uma função, e executa esta função passando o valor P para ele.

=> o método catch de uma promise recebe como argumento uma função, e executa esta função passando o valor Q para ela.

*/ 

function f(g,h){

    if(10 < 0){
        g('P')
    }else{          // logica da função f
        h('Q')
    }
}

function executarSeResolver(valor){
    console.log('Resolveu com o valor' + valor)
}


function executarSeRejeitar(valor){
    console.log('Rejeitou com o valor' + valor)
}

const minhaPromise = new Promise(f)

minhaPromise.then(executarSeResolver)

