/*
    Validando um domínio

=> Da seguinte forma, podemos validar um domínio:


*/

const validarDominio = /^(www.)?\w+.com.br|.com$/;  //$ - determina o final da string

console.log(validarDominio.test("www.kfemprestimos.com.br"))

console.log(validarDominio.test("www.kf"))

console.log(validarDominio.test("www.teste.com"))

console.log(validarDominio.test("www.teste.comor3eiorieorieoi"))

console.log(validarDominio.test("www.266egehw.com"))

console.log(validarDominio.test('kf.com'))

console.log(validarDominio.test('123maria.com'))