/*

    Regex com Caracteres especiais
    
*/

let ano = /\d\d\d\d/

console.log(ano.test('1993'))

console.log(ano.test('opa'))

console.log(ano.test('23/11/1983'))

console.log(ano.test('#@  '))



//=========================================================//

let palavras = /\w\w\w/

console.log(palavras.test('dia'))
