const dia = /\d\d/  // verifica se tem 2 digitos

console.log(dia.test("2019"))


console.log(dia.test("2019" && '2029'.length === 2))

console.log(dia.test("9"))

console.log(dia.test(23))

console.log(dia.test("oi"))