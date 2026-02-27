/*
=> Crie uma regex que aceita a seguinte expressão 'Marca': nomeDaMarca

=> Onde nomeDaMarca pode variar para Nike, Adidas,Puma, Asics

=> depois teste

*/ 


let nomeMarca = /\w+: \w|Nike|Adidas|Puma|Asics/

console.log(nomeMarca.test('Baly'))

console.log(nomeMarca.test('SurfWearnike'))

console.log(nomeMarca.test('SurfWearNike'))

console.log(nomeMarca.test('Asics'))