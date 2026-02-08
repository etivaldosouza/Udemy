/*

    Regex com Caracteres especiais
    
*/

let ano = /\d\d\d\d/ //verificando se a str tem 4 digitos(se é um ano)

console.log(ano.test('1993'))

console.log(ano.test('19'))

console.log(ano.test('opa'))

console.log(ano.test('23/11/1983'))

console.log(ano.test('#@  '))



//=========================================================//

let palavras = /\w\w\w/   //verificando se a string tem 3 letras

console.log(palavras.test('dia'))

console.log(palavras.test('ano'))

console.log(palavras.test('teste'))

console.log(palavras.test('oi'))

console.log(palavras.test('  '))
console.log(palavras.test('n '))






