/*
    Destructuring com objetos

=> Podemos definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring
    
*/

const person = {
    name: 'Jhon',
    lastname: 'Doe'
}

const {name: fname, lastname: lname} = person // estou criando variaveis chamadas fname e lname e armazenando nelas os valores das propriedades(name e lastname) do objeto person


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

var {nome: {sobreNome}} = pm  // segue a ordem(da propriedade nome(que no caso é um objeto) eu quero que extraia a propriedade sobreNome)
console.log(sobreNome)

var {nome: {primeiroNome}} = pm

console.log(primeiroNome)



//============== destructuring com valor default ======================================//


// vai assumir valores caso determinada propriedade ñ exista.


var usuario = {
    nome: {
        primeiro: 'Etivaldo',
        sobreNome: 'Souza'
    }
}

var {nome: {segundo = 'Coelho'}} = usuario // como ñ existe a propriedade segundo, o programa imprimiu coelho. 
console.log(segundo)

// porém caso exista a propriedade que queremos ele irá imprimir a propriedade que já existe e irá desconsiderá a que sugerimos. ex:



var usuario = {
    nome: {
        primeiro: 'Etivaldo',


        sobreNome: 'Souza',
        segundo: 'Carlos'
    }
}

var{nome: {segundo = 'de'}} = usuario // como a propriedade segundo existe ele irá imprimir  valr existente da propriedade desconsiderando o que foi sugerido('de')

console.log(segundo)



//==================================================================================//


// objeto como parâmetro de uma função


function imprimeUsuario(usuario){
    console.log(usuario.nome)
    console.log(usuario.idade)
    console.log(usuario.sexo)
}

var usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: 27,
    sexo: 'M'
}

imprimeUsuario(usuarioFunction)




//================================================================//


// destructuring na função

function calcularDesconto({nome, preco, desconto}){
    const precoFinal = preco - (preco * desconto / 100)
    console.log(`O produto ${nome} com ${desconto}% de desconto custa R$ ${precoFinal.toFixed(2)}`)
}

const produto = {
    nome: 'Teclado Mecânico',
    preco: 250,
    desconto: 10
}

calcularDesconto(produto)


//==================================================================//

function imprimeUsuario({nome, idade, sexo}){
    console.log(`nome: ${nome}`)
    console.log(`idade: ${idade}`)
    console.log(`sexo: ${sexo}`)
}

const usuarioFunction = {
    nome: 'Ayrton',
    idade: 27,
    sexo: 'M',
    país: 'Brasil'
}

imprimeUsuario(usuarioFunction)


//============================================================//

function imprimeProduto(produto) {
    console.log(`Produto: ${produto.nome}`)
    console.log(`Preço: R$ ${produto.preco}`)
    console.log(`Categoria: ${produto.categoria}`)
    console.log('-----------------------------')
}

var lista = [
    {
        nome: 'mouse gamer',
        preco: 149.99,
        categoria: 'periférico'
    },
    {
        nome: 'gabinete',
        preco: 300,
        categoria: 'periférico'
    }
]

// percorre todos os produtos da lista
lista.forEach(imprimeProduto)


//=======================================


// valor defaul p/ função

function imprimeUsuario({nome, idade, sexo, pais = 'Brasil'}){ 
    console.log(nome,idade,sexo,pais)
   
}

const usuarioFunction = {
    nome: 'Etivaldo',
    idade: 42,
    sexo: 'M'
    
}

imprimeUsuario(usuarioFunction)


//=========================================================//


// 

function imprimeUsuario({nome, idade, sexo, pais = 'Brasil'}){ 
    console.log(nome,idade,sexo,pais)
   
}

const usuarioFunction = {
    nome: 'Etivaldo',
    idade: 42,
    sexo: 'M',
    pais: 'japão'
    
}

imprimeUsuario(usuarioFunction)