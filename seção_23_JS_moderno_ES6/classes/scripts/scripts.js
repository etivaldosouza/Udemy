/*
    Classes


=> Um molde para construir um objeto num formato especifico.

=> As classes são recursos fundamentais para programar com orientação a objetos

=> A idéia é vitar um codigo muito grande, evitar repetições.

=> Agora o JS tem este recurso implementado, onde temos acesso a:

constructor, propriedades, métodos e mais

=> Antes as classes eram baseadas em funções(constructor functions)


*/ 

/*

em uma classe temos funções diferentes: uma é a constructor que vai estabelecer os valores iniciais que
o piloto sempre vai ter e a outra é a funcao correr que todo objeto nesse formato teria. 



*/ 


class piloto {

    constructor(nome,equipe,idade) {
        this.nome = nome
        this.equipe = equipe
        this.idade = idade        
    }

    correr() {
        console.log('VruuUUMM')
    }

}

const piloto1 = new piloto('Ayrton Sena','MCLArem',50)
const piloto2 = new piloto('Rubens','Ferrari',45)
const piloto3 = new piloto('Hamilton','Mercedez',30)

console.log(piloto1)
console.log(piloto1.nome,piloto1.equipe)

console.log(piloto2.nome)
piloto2.correr()

piloto3.correr()

//===============================================================================


class Product {

    constructor(name,price) {
        this.name = name
        this.price = price
    }
    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }

}

const shirt = new Product('Camisa gola v', 20)

console.log(shirt)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))

console.log(shirt.productWithDiscount(50))

const tenis = new Product('Mizzuno',400)

console.log(tenis)

console.log(tenis.price)

console.log(tenis.productWithDiscount(25))
