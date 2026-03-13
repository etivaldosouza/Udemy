/*
=> Crie uma regex que aceite apenas letras maiúsculas

=> depois teste

*/ 

let soMaiusc = /^[A-Z]+$/

console.log(soMaiusc.test('12AtivaldZ'))
console.log(soMaiusc.test('ATIVALDO'))
console.log(soMaiusc.test('A'))
console.log(soMaiusc.test('Etivaldo'))


// aceitando apenas uma maiuscula:

let soUmaMaiuscula = /[A-Z]/   // siguinifica que vai aceitar apenas uma letra desse intervalo

console.log(soUmaMaiuscula.test('Etivald')) 
console.log(soUmaMaiuscula.test('ETIVALDO'))
console.log(soUmaMaiuscula.test('T'))

/*
    🔎 Explicação:

^ → início da string

[A-Z] → qualquer letra de A até Z (maiúsculas)

+ → apenas uma letra ou várias letras

$ → fim da string

OBS:

SE EU DEIXAR APENAS /^[A-Z]$/ SIGNIFICA QUE VAI ACEITAR APENAS UMA LETRA

EX. 'E', 'P'

SE TIVER MAIS DE UMA LETRA ENTRA COMO FALSE:

'Etivaldo' => mais de uma letra

*/ 