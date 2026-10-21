/*
    objetos

=> uma coleção de propriedades,parecidos com array ou podemos dizer também um conjunto de chave e valor onde chave é a propriedade e o valor o valor da propriedade.

ex: let objeto = {
    nome = 'etivaldo'  
}
    nome => é a chave(propriedade)
    etivaldo => o valor da chave ou valor da propriedade

=> podemos acessar estas propriedades 

=> funciona como um array porém com uma sintaxe diferente e podemos criar nossas proprias propriedades como no caso abaixo onde temos o objeto pessoa e as propriedades nome, profissao e idade.

=> assim como nos arrays o objetos também tem propriedades onde podemos acessa-las

*/ 

let pessoa = {
    nome: 'Matheus',
    profissao:'Programador',
    idade:28

}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)


let cachorro = {
    patas: 4,
    nome: 'Shark',
    latir: function(){
        console.log('Au Au')
    }
}

console.log(cachorro.patas)

console.log(cachorro.nome)

cachorro.latir()