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

console.log(/^\d+$/.test('123'))