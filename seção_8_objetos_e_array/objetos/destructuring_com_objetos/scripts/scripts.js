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

