/*
    Conjunto de caracteres

=> Podemos definir um conjunto de caracteres para encontrar por regex

=> Basta por entre []

=> Com um traço podemos definir um intervalo também, veja:

*/ 

console.log(/[123]/.test('se existe123?'))

console.log(/[0-9]/.test('o numero 8 está presente aqui?'))

console.log(/[etivaldo]/.test('carlospedroaugusetivaldosouzaneto'))

