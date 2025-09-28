/*
    Destructuring com objetos

=> Podemos definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring
    
*/

const person = {
    name: 'Jhon',
    lastname: 'Doe'
}

const {name: fname, lastname: lname} = person


console.log(fname)
console.log(lname)

//==================================================//

let carro = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: '2.0'
}

const {rodas: vRodas,tetosolar:vtetoSolar, motor: vPotencia} = carro

console.log(vRodas)

console.log(vtetosolar)

console.log(vpotencia)