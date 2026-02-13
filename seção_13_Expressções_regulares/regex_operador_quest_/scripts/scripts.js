/*
    Operador Quest ?

=> Faz com que um digito anterior seja opcional

=> deixa o caractere anterior a ? como opcional
*/

let opcional = /Prova\s?\d?/   // verifica se a palavra Prova tem ou ñ espaço em branco e digito

console.log(opcional.test('Prova '))

console.log(opcional.test('Prova123'))

console.log(opcional.test('Prova@'))

console.log(opcional.test('Prov@'))

console.log(opcional.test('Prov '))


//=============================================================//

const padrao = /\Abacax?i/  // a palavra pode ter o x ou nao

console.log(padrao.test('Abacai'))

console.log(padrao.test('Abacax'))

console.log(padrao.test('Abacai'))

console.log(padrao.test('Abacaxi'))



//=================================================================// 

const matricula = /\d\w?/  //verifica se tem digitos e pode ou nao conter letras

console.log(matricula.test(2412278))

console.log(matricula.test('neto'))
console.log(matricula.test('neto123'))
console.log(matricula.test('123 '))

console.log(matricula.test('neto ')) // vai da false pq ñ tem a primeira confirmação que é a presença de digitos


