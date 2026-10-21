/*
    Carrinho de Compras
*/ 

  class Carrinho {
    constructor(itens,qtd,valorTotal){
      this.itens = itens
      this.qtd = qtd
      this.valorTotal = valorTotal
    }

    addItem(item){

      let contador = 0 // para item q nao esta no carrinho
      for(let itemCarrinho in this.itens){       //itemCarrinho é cada elemento do array(this.item)
        if(this.itens[itemCarrinho].id === item.id){
          this.itens[itemCarrinho].qtd += item.qtd
          contador = 1
        }
      }
      if(contador === 0){
        this.itens.push(item)
      }
      this.qtd = this.qtd + item.qtd
      this.valorTotal = this.valorTotal + item.qtd * item.preco
    }
    removeItem(item){
      for(let itemCarrinho in this.itens){       //itemCarrinho é cada elemento do array(this.item)
        if(this.itens[itemCarrinho].id === item.id){
          
          
          let obj = this.itens[itemCarrinho]
          let index = this.itens.findIndex(obj => obj.id === item.id)   // identificar o index do elemento a ser removido

          this.qtd = this.qtd - this.itens[itemCarrinho].qtd 
          this.valorTotal = this.valorTotal - this.itens[itemCarrinho].qtd * this.itens[itemCarrinho].preco

          this.itens.splice(index,1)         
        
        }
      }
    }

  }

  let carrinho = new Carrinho([

    {
      id: 1,
      nome: 'Camisa',
      qtd: 1,
      preco: 20
    },

    {
      id: 2,
      nome: 'Calça',
      qtd: 2,
      preco: 50
    },
  
  ],3,120)

  console.log(carrinho)


  carrinho.addItem({id: 1, nome: 'Camisa', qtd: 2, preco: 20})


  console.log(carrinho)

  carrinho.addItem({id: 3, nome: 'Boné', qtd: 1, preco: 15})

  console.log(carrinho)

  carrinho.removeItem({id: 1, nome: 'Camisa', qtd: 2, preco: 20})

  console.log(carrinho)
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