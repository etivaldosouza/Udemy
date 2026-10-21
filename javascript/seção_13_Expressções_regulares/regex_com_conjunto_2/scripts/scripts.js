let reg1 = /[0-5]/ 

console.log(reg1.test('43210'))

console.log(reg1.test(59)) // vai dá true do mesmo jeito por causa do 5.

console.log(reg1.test(9))
let arr = [1,30,89]

console.log(reg1.test(arr)) // verificando com variavel