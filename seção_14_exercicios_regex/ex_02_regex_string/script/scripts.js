/*

=> Crie uma regex que só aceite strings terminadas em ID

=> depois teste

*/ 

let valida_ID = /^[A-Z]+ID$/

console.log(valida_ID.test('EtivaldoID'))

console.log(valida_ID.test('EtivaldoDI'))

console.log(valida_ID.test('IDEtivaldo'))

console.log(valida_ID.test('IDEtivaldoid'))

console.log(valida_ID.test('123IDNeto'))
console.log(valida_ID.test('123NetoID'))


/*
Explicação:

^ → início da string

.* → qualquer caractere (zero ou mais vezes)

ID → precisa terminar exatamente com ID

$ → fim da string

*/ 