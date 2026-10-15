/*




*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product("Camisa gola v", 20);
const tenis = new Product("Mizzuno", 400);

console.log(shirt);
console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(tenis);

// utilizando herança:

class productWithAtributes extends Product {
    constructor(name, price, colors) {
        super(name, price); // super: para puxar da classe pai as propriedades em comum da classe atual
        this.colors = colors; // propriedade nova que ñ tem na classe herdada
    }

    showColors() {
        console.log("Corres disponíveis:");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new productWithAtributes("Chapeu", 29.99, [
    "Preto",
    "Azul",
    "Verde",
]);
console.log(hat);

console.log(hat.productWithDiscount(30).toFixed(2));

console.log(hat.name);

hat.showColors();

// ===============================================//



listaCompras = {
    prod1: {
        nome: "Queijo",
        valor: 50,
        categoria: "Alimento",
    },

    prod2: {
        nome: "Carne",
        valor: 70,
        categoria: "Alimento",
    },

    prod3: {
        nome: "Sabonete",
        valor: 10,
        categoria: "Higiene",
    },

    prod4: {
        nome: "Shampoo",
        valor: 20,
        categoria: "Higiene",
    },
};

function prodEspecifico({ prod2 }) {
    console.log(prod2.nome);
}


prodEspecifico(listaCompras);




// Utilizando classe:

class Produtos {
    constructor(nome,valor,categoria) {
        this.nome = nome
        this.valor = valor
        this.categoria = categoria
    }

    descontoProduto(desc){
        return this.valor * ((100 - desc) / 100 ) 
    }
}

const listaCompras = {
    prod1: new Produtos('Queijo',50,'Alimento'),
    prod2: new Produtos('Shampoo',20, 'Higiene'),
    prod3: new Produtos('Carne',80, 'Alimento'),
    prod4: new Produtos('Refrigerante',10, 'Bebida'),
}


console.log(listaCompras)

console.log(listaCompras.prod1.nome)

console.log(listaCompras.prod1.descontoProduto(50))
