/*
=> Crie uma regex que aceita a seguinte expressão 'Marca': nomeDaMarca

=> Onde nomeDaMarca pode variar para Nike, Adidas,Puma, Asics

=> depois teste

*/ 


let nomeMarca = /\w+: [\w|Nike|Adidas|Puma|Asics]/

console.log(nomeMarca.test('Baly'))

console.log(nomeMarca.test('SurfWearnike'))

console.log(nomeMarca.test('Marca: SurfWearNike'))

console.log(nomeMarca.test('Asics'))


let nomeMarca = /\w+: [\w|Nike|Adidas|Puma|Asics]/

console.log(nomeMarca.test('Baly'))

console.log(nomeMarca.test('SurfWearnike'))

console.log(nomeMarca.test('Marca: SurfWearNike'))

console.log(nomeMarca.test('nome: Asics'))

console.log(nomeMarca.test('qualquer nome: Puma'))

console.log(nomeMarca.test('qualquer nome:Adidas')) // ñ respeitou o espaço após os :