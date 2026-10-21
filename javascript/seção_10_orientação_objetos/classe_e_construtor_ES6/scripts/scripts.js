/*
    Construtor na classe(ES6)


=> modo mais moderno

=> Com a versão do ES6, uma possibilidade de criar uma classe(objeto) com construtor foi adicionada.

=> entao não precisamos mais criar por meio de função


*/ 


class Cachorro {    // primeira letra da classe deve ser maiúscula
    constructor(racaDoCachorro){
        this.raca = racaDoCachorro
    }
}

let labrador = new Cachorro('Labrador')
console.log(labrador)


//===================== mais exercícios sobre class constuctor ==========================



class Animal {

    constructor(tipoDoAnimal,corDoAnimal,PatasDoAnimal){
        this.tipo = tipoDoAnimal
        this.cor = corDoAnimal
        this.patas = PatasDoAnimal
    }

}

let leao = new Animal('Leão','Amarelo',4)

let tucano = new Animal('Tucano','preto',2)