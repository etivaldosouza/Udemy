/*
    Destructuring

=> O recurso que pode ser utilizado em arrays e objetos;

=> a ideia é transformar os itens de um desses dados em variáveis

=> Simplificando a delcaração de n variáveis para apenas 1 linha

*/

// destructuring com array

const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f3);


// destructuring com objeto


const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza",
};

const { name: productName, price, category: product,color } = productDetails;


console.log(`o nome do produto é ${productName},custa R$ ${price}, pertence a categoria ${product} e é da cor ${color}`)


// ================================================= //


const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

const numeros = [...numerosPares,...numerosImpares]

console.log(numeros)

// ======================================================= //

const [num1, num2, ...outrosNUmeros] = [1,2,3,4,5,6] // mesma coisa que: num1 = 1 e num2 = 2

console.log(num1,num2,outrosNUmeros)
console.log(num1,num2,...outrosNUmeros)


// =================================================   //


const [nome1 = 'Etivaldo'] = [1]

console.log(nome1)

// =============================================== //

const [nome2 = 'Etivaldo'] = []

console.log(nome2)

// =================================================== //

const pessoa = {
    nome: 'Carlos',
    idade: 26
}

const pessoaComTelefone = {
    ...pessoa, telefone: 981986302
}


const { nome } = pessoa

console.log(nome)

console.log(pessoa,pessoaComTelefone)


// ============================================ //

const policial = {
    nome: 'Etivaldo',
    idade: 43
}

function imprimeDados(dados)  {
    console.log(dados)
}


function imprDado({nome,idade}){ // quando eu quero selecionar oq eu quero de informação. 
    console.log(nome,idade)
}

imprimeDados(policial)

imprDado(policial)