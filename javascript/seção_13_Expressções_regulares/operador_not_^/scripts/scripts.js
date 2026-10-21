/*
    Operador not ^

=> Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not

=> Lembrando que combinações serão aceitas, o negado é apenas se bate com o set

=> Mais adiante aprenderemos negar de outra formas;

*/


let palavrasSemAeB = /[^123]/ // Esse regex não testa a string inteira, ele só procura se existe pelo menos um caractere proibido (no caso, diferente de 1,2,3).

console.log(palavrasSemAeB.test('1112'))


console.log(palavrasSemAeB.test('14')) // o 4


console.log(palavrasSemAeB.test('10312')) // o 0

console.log(palavrasSemAeB.test('1'))


//==============================================//

const notab = /[^ab]/ // procura um caractere q seja diferente de a e b.

console.log(notab.test('a'))

console.log(notab.test('A'))

console.log(notab.test('aquitem a'))

console.log(notab.test('not'))

console.log(notab.test('b'))

console.log(notab.test('bi'))



//====================== com intervalo ==================//


let notAz = /[^a-z]/ // procurar caractere diferente de a até z

console.log(notAz.test('asde'))


console.log(notAz.test('ahgs  hgs')) // o caractere != que tem é o espaço


//=============================================================

let az = /[a-z]/  // aceita todo o alfabeto no minimo

console.log(az.test('rjrkrrk'))

console.log(az.test('rj8778rkrrk'))

console.log(az.test('2373378'))


//=====================================================//


let notNum = /[^2412278]/ //procurar no minimo um caractere diferente desses

console.log(notNum.test('teste'))

console.log(notNum.test('2412248'))


/*

    Não confundir com ^[0-9] fora dos couchetes(significa que deve começar com numeros)


    [^0-9] => procura um caractere != de numeros

    ^[A-Z] => significa que deve começar com letras



🧠 Regra de ouro

    Forma	                                     Significado

    [abc]                                          a OU b OU c
                                          
    [^abc]	                                qualquer coisa EXCETO a, b ou c


^ fora dos colchetes	                      início da string


^ dentro dos colchetes (primeiro)	              negação


*/ 