/*
    Exercício 02

=> Crie uma classe que simule um carrinho de compras de e-commerce

=> Propriedades itens,quantidade total,valor total

=> Crie os métodos para adicionar e remover itens

*/ 


class Carrinho {

    constructor(itens,qtd,valorTotal){
        this.itens = itens
        this.qtd = qtd
        this.valorTotal = valorTotal
    }

    addItem(item){
        let contador = 0        // p/ adicionar item que nao existe no carrinho

        for(let itemCarrinho in this.itens){

            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd
                contador = 1 // caso exista item no carrinho
            }
        }

        if(contador == 0) {
            this.itens.push(item)
        }
        this.qtd = this.qtd + item.qtd
        this.valorTotal = this.valorTotal + item.preco * item.qtd
    } 
    removerItem(item){
        
        for(let itemCarrinho in this.itens){

            if(this.itens[itemCarrinho].id == item.id){
                let obj = this.itens[itemCarrinho]
                let index = this.itens.findIndex(function(obj){return obj.id == item.id})

                this.qtd = this.qtd - this.itens[itemCarrinho].qtd
                this.valorTotal = this.valorTotal - this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd
                
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
        preco: 50,

    },

],3,120)

console.log(carrinho)

carrinho.addItem({id:1,nome:'Camisa',qtd:2,preco:20})

console.log(carrinho)

carrinho.addItem({id:3,nome:'Boné',qtd:1,preco:15}) // add item que nao está no carrinho

console.log(carrinho)


carrinho.removerItem({id:1,nome:'Camisa', qtd: 1, preco:20})

console.log(carrinho)