/*
    Carrinho de Compras
*/ 


class CarrinhoDeCompras {

  constructor(itens,qtd,valorTotal){
    this.itens = itens
    this.qtd = qtd
    this.valorTotal = valorTotal
  }
  addItem(item){

    let contador = 0
    for (let itemCarrinho of this.itens) {
      if (itemCarrinho.id === item.id) {
        itemCarrinho.qtd = itemCarrinho.qtd + item.qtd  
        contador = 1
      }
    }
    if (contador === 0){
      this.itens.push(item)
    }
    this.qtd = this.qtd + item.qtd
    this.valorTotal = this.valorTotal + item.preco * item.qtd
  }

  removeItem(item) {
    for (let itemCarrinho of this.itens) {
      if (itemCarrinho.id === item.id) {
        let index = this.itens.findIndex(obj => obj.id === item.id)

        this.qtd = this.qtd - itemCarrinho.qtd 
        this.valorTotal = this.valorTotal - itemCarrinho.preco * itemCarrinho.qtd

        this.itens.splice(index, 1)
        break
      }
    }
  }
}

let carrinho = new CarrinhoDeCompras([
  {
    id: 1,
    nome: 'Camisa',
    qtd: 1,
    preco:20
  },

  {
    id: 2,
    nome: 'Calça',
    qtd: 2,
    preco: 50
  }
  
], 3,120)

console.log(carrinho)

carrinho.addItem({id: 1,nome: 'Camisa',qtd: 2, preco: 20})

console.log(carrinho)

carrinho.addItem({id: 3,nome: 'Boné',qtd: 1, preco: 15})

console.log(carrinho)


removeItem({id: 1,nome: 'Camisa', qtd: 1, preco: 20})
/*

obs:

REGRA DE OURO (GUARDE ISSO!)

Tipo de loop	O que você recebe

for...in	índice (0, 1, 2)

for...of	valor (objeto)

👉 Se usar for...of, nunca faça:

array[item]


  explicação linha por linha:

  removendo item:

SITUAÇÃO INICIAL (ARRAY)

Imagine que o carrinho esteja assim:

this.itens = [
  { nome: "Camisa", preco: 50, quantidade: 2 }, // índice 0
  { nome: "Tênis", preco: 200, quantidade: 1 }, // índice 1
  { nome: "Boné", preco: 30, quantidade: 1 }    // índice 2
]

CÓDIGO ANALISADO:

removerItem(nome){
  const index = this.itens.findIndex(item => item.nome === nome)

  if(index != -1){
    const itemRemovido = this.itens[index]
  }
}

Agora vamos executar passo a passo, supondo que você chamou:

removerItem("Tênis"):

findIndex percorrendo o array

const index = this.itens.findIndex(item => item.nome === nome)

O que acontece internamente:

Primeira volta:

item = { nome: "Camisa", ... }
"Camisa" === "Tênis" // false


👉 Continua procurando...

Segunda volta
item = { nome: "Tênis", ... }
"Tênis" === "Tênis" // true


👉 Achou!
👉 Para a busca
👉 Retorna o índice 1

📌 Resultado:

index = 1


if (index != -1)

if (index != -1) {


👉 Teste lógico:

1 != -1 // true


👉 Entra no if


Acessando o item pelo índice
const itemRemovido = this.itens[index]


Substituindo o valor de index:

const itemRemovido = this.itens[1]



O QUE É this.itens[1]?

Voltando ao array original:

this.itens = [
  { nome: "Camisa", preco: 50, quantidade: 2 }, // índice 0

  { nome: "Tênis", preco: 200, quantidade: 1 }, // índice 1

  { nome: "Boné", preco: 30, quantidade: 1 }    // índice 2
]


👉 O índice 1 aponta para:

{ nome: "Tênis", preco: 200, quantidade: 1 }


Resultado da linha

itemRemovido = {
  nome: "Tênis",
  preco: 200,
  quantidade: 1
}


👉 Agora você tem o objeto completo do item que será removido.
*/ 