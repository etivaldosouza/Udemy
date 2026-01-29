/*
duas maneiras de utilizar:

let reg1 = new RegExp('o que quer verificar')

let reg2 = /o que quer verificar/

*/ 

const reg1 = new RegExp('bola')

console.log(reg1.test('Tem bola?'))

console.log(reg1.test('Tem Bola?')) // bola com B maiúsculo


// maneira 2 mais usada:



let reg2 = /bola/
console.log(reg2.test('pedrabonecacarropeitosixbolalampadaluz'))

// posso  também ter uma str e fazer o teste em uma variável:

let text = 'se tem bola verificar se tem'

console.log(reg2.test(text))

//posso criar o regx no meio de um codigo:


console.log(/quadrado/.test('circulobolaquadradopedra'))