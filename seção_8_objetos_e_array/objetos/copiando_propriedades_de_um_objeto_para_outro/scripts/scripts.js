/*

=> Podemos copiar todas as propriedades de um objeto para outro

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

console.log(carro)

Object.assign(carro,adicionais)

console.log(carro)


//=============================================//

let pm = {
    nome: 'Etivaldo',
    id: 822297,
    batalhao: '9ºBPM'   // ctrl + ]} e ctrl + a tecla do lado de ]} ativa os simbolo de graus

}

let pistola = {
    numeracao: 80024,
    calibre: '.40',
    carregador: 3
}

let cadastropm = Object.assign(pm,pistola) // vai concatenar os objetos na ordem q tá nos parenteses

console.log(cadastropm)


