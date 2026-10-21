/*
    Operador plus +

=> Quando um + está após alguma expressão, este elemento pode se repetir mais de uma vez.



*/ 

let muitosOuPoucosDigitos = /\d+/  // mais de um diginos infitavezes

console.log(muitosOuPoucosDigitos.test(123))

console.log(muitosOuPoucosDigitos.test('123456789'))

console.log(muitosOuPoucosDigitos.test(''))

console.log(muitosOuPoucosDigitos.test('etivaldo'))