/*

=>  Crie uma regex que valide nome de usuarios no sistema

=>  aceitaletras de a-z, _ e -, números de 0-9, minimo de 3caracteres e maximo 16

    depois teste.
*/  

let validaNome = /^[a-z0-9_-]{3,16}$/

console.log(validaNome.test('ecoelho83'))
console.log(validaNome.test('ecoelh_o-83'))

console.log(validaNome.test('ec'))
console.log(validaNome.test('-_-'))

console.log(validaNome.test('ec83'))
console.log(validaNome.test('ec83@'))

console.log(validaNome.test('a111111111111111'))

console.log(validaNome.test('a1111111111111101'))

console.log(validaNome.test('111111111111111'))