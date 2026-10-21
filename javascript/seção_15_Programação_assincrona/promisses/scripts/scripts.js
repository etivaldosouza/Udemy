/*
    Promises

=> As Promisses também são ações assíncronas que podem produzir um valor em algum momento no código.

=> Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código

=> O objeto das promises é Promise, resolve, é o método que resolve uma Promise, o then é o que faz ela poder ser executada em um ponto futuro

*/ 

let promessa = Promise.resolve(4 + 8)

console.log('Algum código')

promessa.then((value) => console.log(`A soma é ${value}`))


//================================================================//

let p = Promise.resolve(5)

console.log('Outros Códigos')

console.log(p)

p.then(valor => valor + 5 )        // sem aerowfunction
  

.then((valor) => {
    console.log(valor)
})


//============================


let nome = Promise.resolve('Etivaldo')

nome.then(function(arg){
    console.log(`olá ${arg}`)
})

console.log('este trecho segue o fluxo normal do programa, ou seja sincrono')
console.log('fim da programação sincrona')


//===========================================================================//

/*
    
valor => { valor + 5 }

Quando você usa {} em arrow function, precisa usar o nome return explicitamente.

👉 Do jeito que está, a função não retorna nada, então o valor vira undefined.


*/

let pi = Promise.resolve(5)

pi.then(valor => {          // usando aerowfunction
    console.log('Primeiro then recebeu:', valor)
    valor + 5   // ❌ não retorna nada
})
.then(valor => {
    console.log('Segundo then recebeu:', valor)
})

//=======================================================//

let pis = Promise.resolve(15)

pis.then(function(valor){
    console.log('o primeiro then recebeu',valor)
    return valor + 5         //fica 20 armazenado na memoria
})
.then(valor => console.log('Segundo then recebeu:', valor))

    

// vale lembrar que o return armazena o valor na memoria, já o console.log não. so exibe na tela mas nao armazena.
    
    
    

    

    
pis.then(valor =>{
    console.log('Segundo then recebeu:', valor)
})
    
