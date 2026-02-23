/*
    Validando e-mail

=> da seguinte forma, podemos validar um e-mail:
*/ 


let validarEmail = /w+@\w+.com.br|.com$/

console.log(validarEmail.test('etivaldosouza@hotmail.com'))
console.log(validarEmail.test('etivaldosouza@hotmail.com.br'))

