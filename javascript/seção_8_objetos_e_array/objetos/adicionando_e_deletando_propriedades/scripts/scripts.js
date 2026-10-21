/*
    Deletando e criando Propriedades no objeto.

=>  podemos adicionar e deletar propriedades ao longo do nosso programa

*/ 

// criando um objeto vazio:


const livros = new Object() // sintaxe que cria um objeto vazio

console.log(livros)
// adicionando propriedades ao objeto

livros.nome = 'javaScript'
livros.autor = 'Maujor'
livros.paginas = 215
livros.editora = 'novatec'

console.log(livros)

// destructuring do objeto para imprimir os valores das propriedades do objeto

const {nome: inome,autor: iautor,paginas:ipaginas,editora:ieditora} = livros

console.log(inome,iautor,ipaginas,ieditora)



let carro = {
    marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
}

console.log(carro.portas)

delete carro.eletrico

carro.tetoSolar = true // adicionando a propriedade tetoSolar

console.log(carro)

//======================================//

let pessoa = {
    nome:"Etivaldo",
    idade: 42,
    profissao: "programador"

}

delete pessoa.idade
console.log(pessoa.idade) // vai dá underfined pois ñ existe mais valor p/ propriedade

console.log(pessoa)

pessoa.estadoCivil = "casado"

console.log(pessoa)