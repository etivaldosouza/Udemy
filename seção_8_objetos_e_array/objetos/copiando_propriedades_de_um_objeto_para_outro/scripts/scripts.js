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

let cadastropm = Object.assign(pm,pistola) // vai concatenar os objetos na ordem q tá nos parenteses(ou seja, cou adicionar as propriedades do objeto pistola ao objeto pm)

console.log(cadastropm)

//==============================================================//


// mudando a ordem:


let pm = {
    nome: 'Etivaldo',
    id: 822297,
    batalhao: '9ºBPM'  
}

let pistola = {
    numeracao: 80024,
    calibre: '.40',
    carregador: 3
}

console.log(Object.assign(pistola,pm)) // estou adicionando dados do objeto pm ao objeto pistola

//===================================================================//
/*
    * criando um objeto novo para adicionar os outros objetos

    => é aconselhavel usar dessa forma

*/ 

let pm = {
    nome: 'Etivaldo',
    id: 822297,
    batalhao: '9ºBPM'   // ctrl + ]} e ctrl + a tecla do lado de ]} ativa os simbolo de graus

}

let informacoesExtras = {
    cia: 'Tática',
    mt: '21068',
    barra: 14

}

console.log(Object.assign({},pm,informacoesExtras)) // ou posso criar uma variável.
// aqui estou adicionando os objetos pm e informacoesExtras num objeto novo vazio.por isso a chaves vazia no início.
// se ñ tivesse a chave é como se estivesse incorporadno o objeto informacoesExtras no objeto pm. veja o caso abaixo:


let novoObj = Object.assign(pm,informacoesExtras)
console.log(novoObj)

console.log(pm)



//====================================================================//



// utilizando o spreed(ECMA)¨:



let pm = {
    nome: 'Etivaldo',
    id: 822297,
    batalhao: '9ºBPM'  
}

let pistola = {
    numeracao: 80024,
    calibre: '.40',
    carregador: 3
}

let objetoNovo = {
    ...pm,
    ...pistola
}

console.log(objetoNovo)


//=========================================================================//

/*
 passando o valor de uma variavel como variavel de um objeto

*/ 



let pm = {
    nome: 'Etivaldo',
    id: 822297,
    batalhao: '9ºBPM'  
}

let graduacao = 'cabo'
let area = 'cepam-oeste'

let novoObj = {
    ...pm,
    [graduacao]: '/14',
    [area]: '9ºBPM'
}

console.log(novoObj)



//===============================================================//

// utilizando condicionais:

