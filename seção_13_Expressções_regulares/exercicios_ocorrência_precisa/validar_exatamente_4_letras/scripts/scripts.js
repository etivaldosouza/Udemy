/*

    Validar uma palavra com exatamente 4 letras

*/ 

let letras = /^[A-Za-z]{5}$/    

console.log(letras.test('etiv'))


// tem que ter o ^no inicio e o $ no final p/ contar a quantidade certa.


let tresLetras = /^[A-Za-z]{4}/  // aqui aceita no minimo 4 letras começando com letras

console.log(tresLetras.test('Etivaldo'))

console.log(tresLetras.test('123Etivaldo'))

console.log(tresLetras.test('Etiv245454'))
console.log(tresLetras.test('Etiv 245454'))


//============================================//

/*
    comecando e terminando com letras

*/ 

let apenasTresLetras = /^[A-Za-z]{3}$/ // so aceita letras no inicio e no fim e apenas 3

console.log(apenasTresLetras.test('Etivaldo'))

console.log(apenasTresLetras.test('rua'))

console.log(apenasTresLetras.test('1rua'))

console.log(apenasTresLetras.test('rua2'))

//==============================================================================


let apenas8Letras = /[A-Za-z]$/          // tem q terminar apenas com letras

console.log(apenas8Letras.test('123Etivaldo'))

console.log(apenas8Letras.test('Etivaldo123'))

//======================================================//


let apenasLetras = /^[A-Za-z]$/         // apenas 1 letra maiuscula ou minuscula 

console.log(apenasLetras.test('etivaldo'))

console.log(apenasLetras.test('1etivaldo'))

console.log(apenasLetras.test('etivaldo1'))

console.log(apenasLetras.test('etivald'))

console.log(apenasLetras.test('e'))