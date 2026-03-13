/*
=> Crie uma regex que valide endereços de IP

=> ex: 127.0.0.1

=> depois teste


Para validar um endereço IPv4 (como 127.0.0.1) precisamos lembrar das regras:

Um IP possui 4 números separados por ponto.

Cada número (octeto) vai de 0 até 255.

Exemplo válido: 192.168.1.1


*/ 

let validaIp = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/

console.log(validaIp.test('45.169.57.87'))
console.log(validaIp.test("127.0.0"))
console.log(validaIp.test("192.168.1.1"))