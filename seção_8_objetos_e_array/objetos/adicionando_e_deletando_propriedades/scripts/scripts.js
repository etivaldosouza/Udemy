/*
    Deletando e criando Propriedades no objeto.

=>  podemos adicionar e deletar propriedades ao longo do nosso programa

*/ 

let carro = {
    marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
}

console.log(carro.portas)

delete carro.eletrico

carro.tetoSolar = true

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