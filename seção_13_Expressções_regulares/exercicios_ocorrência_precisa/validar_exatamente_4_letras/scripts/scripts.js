/*

    Validar uma palavra com exatamente 4 letras

*/ 

let letras = /^[A-Za-z]{4}$/    // comecar e terminar com letras(vai ser exatamente 4 letras e ñ aceita nada após)

console.log(letras.test('etiv'))

console.log(letras.test('1etiv'))

console.log(letras.test('etiv4'))


// tem que ter o ^no inicio e o $ no final p/ contar a quantidade certa. veja o caso abaixo:


let tresLetras = /^[A-Za-z]{4}/  // aqui aceita no minimo 4 letras começando com letras

console.log(tresLetras.test('Etivaldo'))

console.log(tresLetras.test('123Etivaldo'))

console.log(tresLetras.test('Etiv245454'))
console.log(tresLetras.test('Etiv 245454'))
console.log(tresLetras.test('Eti 245454'))


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


let soLetras = /[A-Za-z]$/          // tem q terminar apenas com letras

console.log(soLetras.test('123Etivaldo'))

console.log(soLetras.test('Etivaldo123'))

let letra = /\w+/

//======================================================//


let apenasLetras = /^[A-Za-z]$/         // apenas 1 letra maiuscula ou minuscula 

console.log(apenasLetras.test('etivaldo'))

console.log(apenasLetras.test('1etivaldo'))

console.log(apenasLetras.test('etivaldo1'))

console.log(apenasLetras.test('etivald'))

console.log(apenasLetras.test('e'))



//=====================================================//

// Começando por números:


let numeros = /^[0-9]/

console.log(numeros.test('123A'))

console.log(numeros.test('etivaldo123'))


//================================================//

// Apenas números


let num = /^[0-9]$/ // aqui significa que irá aceitar apenas um número

console.log(num.test('1'))

