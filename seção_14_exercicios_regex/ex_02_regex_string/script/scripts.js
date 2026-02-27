/*

=> Crie uma regex que só aceite strings terminadas em ID

=> depois teste

*/ 

let valida_ID = /^[A-Za-z]+ID$/

console.log(valida_ID.test('EtivaldoID'))

console.log(valida_ID.test('EtivaldoDI'))

console.log(valida_ID.test('IDEtivaldo'))

console.log(valida_ID.test('IDEtivaldoid'))

console.log(valida_ID.test('123IDNeto'))
console.log(valida_ID.test('123NetoID'))


/*
Explicação:

^ → início da string

A-Za-z → qualquer letra maiuscula ou minuscula

+ -> uma ou mais vezes

ID → precisa terminar exatamente com ID

$ → fim da string

*/ 

/*
OBS:

^[A-Z] => aceita apenas uma letra desse intervalo

ex. 'A','B' ...

'AB' ñ vai aceitar pq tem mais de uma letra



*/ 

//==========================================//

let str = /^[A-Z]/

console.log(str.test('etivAldo123'))

console.log(str.test('Eetivldo123'))

console.log(str.test('E'))

console.log(str.test('123'))


//================================================//

