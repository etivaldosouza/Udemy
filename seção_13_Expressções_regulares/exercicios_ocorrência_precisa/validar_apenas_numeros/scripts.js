/*
    Validando apenas números:

=> deve aceitar:

"123"
"987654"

=> Não deve aceitar:

"12a3"
"abc"
"12 34"

*/ 


let num = /\d+$/   // um ou mais números seguidos e terminando em numero

console.log(num.test('1237736347'))

console.log(num.test('123Abcg'))



//================================================================//

//OBS:


let numero = /^[0-9]$/ // aqui significa que irá aceitar apenas um número

console.log(numero.test('1'))

console.log(numero.test('182783787287827'))