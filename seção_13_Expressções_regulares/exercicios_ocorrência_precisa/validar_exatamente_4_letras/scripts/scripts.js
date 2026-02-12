/*

    Validar uma palavra com exatamente 4 letras

*/ 

let letras = /^[A-Za-z]{5}$/    

console.log(letras.test('etiv'))


// tem que ter o ^no inicio e o $ no final p/ contar a quantidade certa.