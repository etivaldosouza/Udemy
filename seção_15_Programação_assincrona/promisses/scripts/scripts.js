/*
    Promises

=> As Promisses são ações assíncronas que podem produzir um valor em algum momento no código.

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

p.then(function(valor){          // sem aerowfunction
    return valor + 5
})
.then((valor) => {
    console.log(valor)
})