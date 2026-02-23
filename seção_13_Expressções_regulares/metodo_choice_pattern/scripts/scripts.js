/*
    choice pattern

=> Podemos colocar uma instrução na regex que funciona como ||(ou) das condicionais

*/ 

let frutas = /\d+ (bananas|maçãs|laranjas)/ //(vai procurar um número mais um espaço e um nome)

console.log(frutas.test('10 bananas'))

console.log(frutas.test('25 batatas')) // false pq batata nao tem

console.log(frutas.test('8 laranjas'))

console.log(frutas.test('8laranjas')) //false pq ñ respeitou o espaço


//==============================================================//

const reg = /\w+: (Matheus|João|Maria)/ //Padrão imposto(nome qualquer: kjsskjkj)

console.log(reg.test('aluno: Maria'))

console.log(reg.test('policia: Matheus'))

console.log(reg.test('nome: Etivaldo'))

console.log(reg.test('policia:Matheus')) // ñ tem o espaço

console.log(reg.test('id: 2412278')) 

console.log(reg.test('1300: Matheus')) 

/*
w+ quanquer caractere alfanumerico
*/ 

