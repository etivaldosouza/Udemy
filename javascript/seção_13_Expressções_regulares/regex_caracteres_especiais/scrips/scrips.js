/*
    Caracteres Especiais

=> \d - qualquer digito de caractere.

=> \w - Um caractere alfanumérico('teste')

=> \s - Qualquer Caractere de espaço em branco

=> \D - Caracteres que não são dígitos
 
=> \W - Caractere não alfanúmerico

=> \S - Caractere que não seja espaço em branco

=> . - Qualquer caractere, menos nova linha
*/ 



const pontoRegex = /./ //vai aceitar todo tipo de caractere

console.log(pontoRegex.test('asdffggf'))
console.log(pontoRegex.test('  '))
console.log(pontoRegex.test('124534'))
console.log(pontoRegex.test('asd3453ojxikf'))


//============================================================//

const dRegex = /\d/  // equivale ao [0-9], aceita toda as expressoes q tenham digitos

console.log(dRegex.test('124534'))
console.log(dRegex.test('jdhsjhsjh'))
console.log(dRegex.test('    '))
console.log(dRegex.test('124ueuhsdjh'))


//================================================================//

const regexD = /\D/  // equivale a /[^0-9]/ aceita caracteres que não são dígitos. 

console.log(regexD.test('124534'))
console.log(regexD.test('jdhsjhsjh'))
console.log(regexD.test('    '))
console.log(regexD.test('124ueuhsdjh'))
console.log(regexD.test('1 2 4')) // true por causa do espaço em branco


//===========================================================================================//

const sRegex = /\s/ // aceita qualquer caractere de espaço em branco(tab ou quebra de linha)

console.log(sRegex.test('242422'))
console.log(sRegex.test('erettertr'))
console.log(sRegex.test('24RETGHEsgsg'))
console.log(sRegex.test('')) // String vazia não tem caractere nenhum — nem espaço.
console.log(sRegex.test(' '))
console.log(sRegex.test('242  422'))
console.log(sRegex.test(`hgjhdhd
    `))

//==============================================================================================//

const regexS = /\S/  //não aceita caractere de espacos em branco

console.log(regexS.test('jewjwjhewjh'))
console.log(regexS.test('143542354'))
console.log(regexS.test(' jhewjh'))
console.log(regexS.test('')) // String vazia não tem caractere nenhum.
console.log(regexS.test(' '))


//==============================================================================================//

const wRegex = /\w/  // aceita apenas caractere alfanumérico

console.log(wRegex.test('kjkjkjjkj')) 
console.log(wRegex.test('122334')) 
console.log(wRegex.test('')) 
console.log(wRegex.test('  ')) 
console.log(wRegex.test('kj   kjk')) 
console.log(wRegex.test('@@')) 

//===========================================================================================//

const regexW = /\W/ //ñ aceita caracteres alfa numerico(aceita qualquer caractere menos letras e numeros)

console.log(regexW.test(123))
console.log(regexW.test())
console.log(regexW.test('ereje')) 
console.log(regexW.test('hejwj '))
console.log(regexW.test('@@')) 
console.log(regexW.test(';')) 

