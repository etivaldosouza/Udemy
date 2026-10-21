/*
    Funções Construtoras e Prototypes:


=> as funções construtoras instanciam objetos com uma estrutura pré-definida.

=> todos os objetos herdam o prototype de Object (existe uma classe principal que é a mãe de todas(Object) e as demais classes vão herdar delas)



     prototype de uma função:

=>  É um mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros(Mozilla)

=>  O prototype de um construtor(entada construtor como função construtora) define uma estrutura de menbros(menbros na Orientação a objetos são as propriedades e métodos) que são compartilhados pelas instâncias desse construtor

=>



*/ 

const p1 = {  // criando objeto de forma literal

    nome: 'Computador',
    preco: 3000.0,
    quantidade: 2

}

// se eu quiser criar outro objeto eu teria que fazer tudo de novo na mao como acima(forma literal) por isso usamos a função construtora


/*
    sobre o this:

=> a palavra this é uma referência para o proprio objeto.

=> serve para acessar membros(propriedades e funções) do proprio objeto, ou então para referenciar o objeto de uma forma geral



*/ 

// função construtora

const Produto = function(nomeDoProduto,precoDoProduto,quantidadeDoProduto){

    this.nome = nomeDoProduto   //this.name: estou falando que o nome é um atributo(propriedade) do proprio objeto.
    this.preco = precoDoProduto
    this.quantidade = quantidadeDoProduto 

}

// a função Produto o prototype dela é o object(por tanto ela herda as propriedades e metodos de Object)


const p2 = new Produto('Monitor',800.0,10)
console.log(p2)




//==================================================================================

// boa prática: 
// defina propriedades dentro do construtor e métodos no prototype

const Produtos = function(nomeDoProduto,precoDoProduto,quantidadeDoProduto){
    this.nome = nomeDoProduto   
    this.preco = precoDoProduto
    this.quantidade = quantidadeDoProduto 
}
Produtos.prototype.total = function(){
    return this.preco * this.quantidade
}
Produtos.prototype.add = function(qtde){
    this.quantidade = this.quantidade + qtde

}
Produtos.prototype.remove = function(qte){
    if(this.quantidade >= qte) {
        this.quantidade = this.quantidade - qte
    }
   
}

Produtos.prototype.label = function(){
    return `Dados: ${this.nome}, ${this.preco}`
}

const p_1 = {  //  objeto criado de forma literal

    nome: 'Computador',
    preco: 3000.0,
    quantidade: 2
}

//*: const p_1 = new Produtos('Computador',3000.0,2) (caso quisesse criar o p1 usando o construtor)

p_1.total = Produtos.prototype.total   //como o objeto p_1 foi criado de forma literal ou seja ñ foi criado através do construtor Produto então tive q adicionar o metodo para o objeto literal

console.log(p_1.total())

const p_2 = new Produtos('Monitor',800.0,10) //herda as propriedades e metodos de Produtos 

const p_3 = new Produtos('Mouse',50.0,4)

console.log(p_1.total())
console.log(p_2.total())
console.log(p_3.total())



console.log(p_2.quantidade)

p_2.add(3) // adicionando 3 quantidades

console.log(p_2.quantidade)

console.log(p_3.quantidade)

p_3.remove(4)
console.log(p_3.quantidade)


console.log(p_2.label())

console.log(p_3.label())
