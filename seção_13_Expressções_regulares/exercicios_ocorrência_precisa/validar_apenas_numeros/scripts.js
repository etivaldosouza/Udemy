/*
    Validando apenas números:

=> deve aceitar:

"123"
"987654"

=> Não deve aceitar:

"12a3"
"abc"
"12 34"

*/ 


let num = /\d+$/

console.log(num.test('123'))

console.log(num.test('123Abcg'))