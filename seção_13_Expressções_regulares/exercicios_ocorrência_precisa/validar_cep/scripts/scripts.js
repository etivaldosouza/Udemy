

let cep = /^\d{5}-\d{3}$/  // iniciando por nr e terminando com numero. primeiro campo aceitando 5digitos depois - e por ultimo 3 digitos

console.log(cep.test('A65110-000'))

console.log(cep.test('65110000'))

console.log(cep.test('651100-000'))

console.log(cep.test('65110-000'))