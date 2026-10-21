/*
    Callbacks:
    
=>  Uma das vertentes a programação assíncrona é fazer ações que aconteçam depois de um tempo por meio de callbacks;

=>  Callback é uma função que faz uma ação após algum acontecimento no código

=> Podemos realizar um callback com a função setTimout, veja:

*/ 

console.log('Ainda não chamou o callback')

setTimeout(function(){
    console.log('Chamou o Callback')
},3000)

console.log('Ainda ñ Chamou o Callback!!')


//=================================================================================//
/*
    setTimeout é uma função que está recebendo uma função como parâmetro e essa função que funciona como parâmetro é denominada de callback e tb recebe outro parâmetro que é o tempo em milisegundos

*/ 
console.log('1')

setTimeout(function(){   
    console.log('10')
},3000)

console.log('2')

console.log('3')

console.log('4')

/*
    na programação assincrona vc tem um código que é executado fora do fluxo normal do programa ou seja ele é executado num momento futuro como acontece na função setTimeout. vale salientar que no caso da funçao setTimeou ela nao trava o código, ou seja, o programa segue o fluxo normal e após a execução do fluxo normal do programa a função setTimout é executada. por isso é assincrona, pois, ela nao trava o programa mas sim é executada em momento futuro após o fluxo normal do programa.

    o número 10 é executado de forma assincrona ao fluxo do programa.
*/ 


//======================================================================//

console.log('fluxo normal do programa')

setTimeout(function(){
    console.log('função callback,assincrona.')
},5000)

function conceito(msg){
    return msg
}

console.log(conceito('sou uma função sincrona, seguindo o fluxo normal do programa'))
