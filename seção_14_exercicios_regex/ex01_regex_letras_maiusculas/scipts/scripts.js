/*
=> Crie uma regex que aceite apenas letras maiúsculas

=> depois teste

*/ 

let soMaiusc = /A-Z/

console.log(soMaiusc.test('Etivaldo'))
console.log(soMaiusc.test('ETIVALDO'))