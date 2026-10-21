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

let palavras = /\w\w\w/   //verificando se a string tem no mínimo 3 letras

console.log(palavras.test('dia'))

console.log(palavras.test('ano'))

console.log(palavras.test('teste')) //* vai dá true pq tem no minimo 3

console.log(palavras.test('oi'))

console.log(palavras.test('  '))
console.log(palavras.test('n '))


/*
    VALIDANDO APENAS LETRAS COM TAMANHO EXATO

=>  Para validar letras com tamanho exato e não correr o risco da "confusão acima" usa-se:

=>  /^[A-Za-z]{5}$/ => o valor dentro da chaves corresponde a quantidades de letras que queremos validar


*/ 

let regex = /^[A-Za-z]{3}$/

console.log(regex.test('teste'))

console.log(regex.test('Etivaldo'))

console.log(regex.test('rua'))