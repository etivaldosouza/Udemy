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

console.log(vtetoSolar)

console.log(vPotencia)


//===========================================================//


let aluno = {
    nome: 'José',
    idade: 45,
    curso: 'Ads',
    periodo: '3º'
}


const {nome: inome, curso: icurso,idade: iidade, periodo: iperiodo} = aluno

console.log(inome,iidade,icurso,iperiodo)


//================================================================//

/*
    como era antes do ECMASCRIPT 6 para acessar as propriedades do objeto
*/ 


let aluno = {
    nome: 'José',
    idade: 45,
    curso: 'Ads',
    periodo: '3º'
}

console.log(aluno.nome,aluno.curso,aluno.periodo)


//========================================================//



// mais exemplplos utilizando o destructuring p/ pegar os valores de cada chave(propriedade):


var usuario = {
    nome: 'Ayrton',
    idade: 27,
    pais: 'Brasil'
}

var {nome,idade,pais} = usuario

console.log(idade)
console.log(nome)
console.log(pais)


//============================================//

// destructurin de array

lista = ['Jose','Paulo','Roberto']

var [nome0,nome1,nome2] = lista

console.log(nome2)



//================================================//

// destructuring de objetos aninhados 

var pm = {
    nome:  {
        primeiroNome: 'Etivaldo',
        sobreNome: 'Souza'
    }
}

console.log(pm.nome.primeiroNome) // forma antiga



//========================================================//

// com destructuring


var pm = {
    nome:  {
        primeiroNome: 'Etivaldo',
        sobreNome: 'Souza'
    }
}

console.log( {nome} = pm)

console.log(' \n==================================================\n')

var {nome} = pm

console.log(nome)

console.log(' \n==================================================\n')

var {nome: {sobreNome}} = pm
console.log(sobreNome)

var {nome: {primeiroNome}} = pm

console.log(primeiroNome)



//============== destructuring com valor default ======================================//


