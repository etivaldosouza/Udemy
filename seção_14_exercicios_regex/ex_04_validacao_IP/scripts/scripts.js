/*
=> Crie uma regex que valide endereços de IP

=> ex: 127.0.0.1

=> depois teste

*/ 

let validaIp = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/

console.log(validaIp.test('45.169.57.87'))
console.log(validaIp.test('1.0.0.4'))
console.log(validaIp.test('112.0.0.4'))
console.log(validaIp.test('8.8.8.8'))
console.log(validaIp.test('127.0.0'))
console.log(validaIp.test('192.168.1.1'))
console.log(validaIp.test('193.5.4.1.3'))
console.log(validaIp.test('1934.5.4.1'))
