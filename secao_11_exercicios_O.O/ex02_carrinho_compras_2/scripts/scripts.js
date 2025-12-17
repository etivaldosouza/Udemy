/*
    Carrinho de Compras
*/ 


class CarrinhoDeCompras {
    constructor(itens,qtd,valorTotal){
        this.itens = itens
        this.qtd = qtd
        this.valorTotal = valorTotal
    }

    adicionarItem(nome,preco,quantidade){

        const produto = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }

        this.itens.push(produto)

        this.quantidadeTotal = this.quantidadeTotal + quantidade
        this.valorTotal = this.valorTotal + preco * quantidade
    }
    
    removerItem(nome){
        const index = this.itens.findIndex(item => item.nome === nome)

        if(index != -1){
            const itemRemovido = this.itens[index]

            this.quantidadeTotal = this.quantidadeTotal - itemRemovido.quantidade
            this.valorTotal = this.valorTotal - itemRemovido.preco * itemRemovido.quantidade

            this.itens.splice(index,1)   // remove 1 item a partir de index
        }else {
            console.log('Item não encontrado no carrinho')
        }
    }
}

let carrinho = new CarrinhoDeCompras()

carrinho.adicionarItem("Camisa", 50, 2)
carrinho.adicionarItem("Tênis", 200, 1)

console.log(carrinho)

/*
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