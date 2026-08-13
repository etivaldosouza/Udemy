/*
=> Crie uma regex que valide endereços de IP

=> ex: 127.0.0.1

=> depois teste

*/ 

let validaIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/

console.log(validaIp.test('1.0.0.4'))
console.log(validaIp.test('112.0.0.4'))
console.log(validaIp.test("8.8.8.8"))
console.log(validaIp.test("193.5.4.1.3"))
console.log(validaIp.test("1934.5.4.1"))