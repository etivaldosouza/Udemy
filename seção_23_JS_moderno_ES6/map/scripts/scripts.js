/*
    Map

=> O map é também um método de array , que percorre todos os elementos;

=> Quando utilizamos map, estamos querendo modificar os dados do array(diferença para o filter)

=> Há vários métodos de array importante no ES6, este é um deles.

*/ 


const products = [
    {nome:'Camisa', price: 10.99, category: 'Roupas'},
    {nome:'Chaleira elétrica', price: 49.99, category: 'Eletro'},
    {nome:'Fogão', price: 400, category: 'Eletro'},
    {nome:'Calça Jeans', price: 50.99, category: 'Roupas'}
]

const promo = products.map((product) => { // por convencao o paramêtro vai ser o nome da variavel no singular(product)
    
    if(product.category === 'Roupas'){

        product.onSale = true  // criando uma nova propriedade onSale com valor true
        product.price = (product.price - (product.price * 0.2)).toFixed(2)
    }
    
    return product

})


console.log(products)
console.log(promo) // da no mesmo


// outra maneira



const products1 = [
    {nome:'Camisa', price: 10.99, category: 'Roupas'},
    {nome:'Chaleira elétrica', price: 49.99, category: 'Eletro'},
    {nome:'Fogão', price: 400, category: 'Eletro'},
    {nome:'Calça Jeans', price: 50.99, category: 'Roupas'}
]

const promo1 = products1.map((product) => { // product é cada elemento do array(posso dá qualquer nome)

    if(product.category === 'Roupas'){
        product.onSale = true
        product.price = (product.price * 0.8).toFixed(2)
    }   
    
})


console.log(products1)
console.log(promo1) // irá dá undefined pois ñ usou o return




/*


Sem return, o map() vai criar promo assim:

console.log(promo)
// [undefined, undefined, undefined, undefined]

Porém, você provavelmente está fazendo:

console.log(products)

E aí realmente verá os preços alterados.

Por quê?

Porque product é uma referência para cada objeto que está dentro de products.

Quando você faz:

product.price = 8.79

você está modificando o próprio objeto original dentro de products.

Então acontece isto:

products ──→ objeto Camisa
                 ↑
              product

Você modifica product → o objeto de products também muda.


*/ 