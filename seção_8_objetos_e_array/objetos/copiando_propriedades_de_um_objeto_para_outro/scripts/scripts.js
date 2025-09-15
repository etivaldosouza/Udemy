/*

=> Podemos copiar todas as propriedades de um objto para outro

*/ 

let objetoA = {
    prop1: "teste",
    prop2: "testando",
}

let objetoB = {
    prop3: "propriedade"
}



Object.assign(objetoA,objetoB)

console.log(objetoA)

//=================================//

let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}

let adicionais = {
    tetosolar: 'tetosolar',
    arcondicionado: true
}

Object.assign(carro,adicionais)

console.log(carro)

