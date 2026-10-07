/*
    Destructuring    

*/ 

/*

Com Objeto:

*/ 


const pessoa = {
    name: 'Elton',
    age: 26
}

const { name } = pessoa

console.log(name)


// renomeando propriedades

const pm = {
    name: 'Etivaldo',
    age: 43
}

const {name: nome, age: idade} = pm

console.log(`O policial chama-se ${nome} e tem ${idade} anos`)


// com variáveis que já existem:

let id;

const policial = {
   nome: 'Elton',
   matricula: 2434
}; //o ponto e virgula aqui é indispensalvel para ñ dá erro

({ matricula: id } = policial)

console.log(id)


//==========================================================//

// array

// dois valores

const frutas = ['banana','pera','maçã']

const [f1,f2] = frutas
console.log(f1)
console.log(f1)

//==============================

// desconsiderando item

const carr = ['byd','onix','ka']

const [ ,c1 ] = carr   // tô pegando a partir do segundo elemento

console.log(c1)

//====================================

// ...rest (siguinificado => 'resto') usado convencionalmente porém pode ser qualquer palavra precedido dos ...

const mikes = ['João','Pedro','Carlos','Karine']

const [m1,...rest] = mikes

console.log(m1)
console.log(...rest) 


//================================================

// Função


function liquidificador(x){
    console.log(x)
}

const fruits = {
    f1: 'Banana',
    f2: 'Pera'
}


liquidificador(fruits)


// selecionando apenas um item especifico:

function liquidificador( { fruta2 } ){
    console.log(fruta2)
}

const frutaS = {
    fruta1: 'banana',
    fruta2: 'peraa'
}

liquidificador(frutaS)


// =======================================


function liquidificador([f1,,...rest]){ // as duas virgulas faz com que seja desconsiderado o prox item(só funciona com array)
    console.log(f1,...rest)
}

liquidificador(['limão', 'laranja','abacaxi','kiui'])


// =========================================


function carros([ca1,...rest]){
    console.log(ca1,rest)
    console.log(...rest)
}

carros('byd')