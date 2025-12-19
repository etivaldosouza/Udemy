/*
    Exercício 04

=> Crie uma classe que simule um carro

=> Propriedades: marca,cor,gasolina restante

=> Crie um método de dirigir o carro,que vá diminuindo a gasolina gradativamente

=> e um de abastecer para aumentar a gasolina quando necessário.


*/ 

class Carro {
    constructor(marca,cor,gasolinaRestante){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolinaRestante
        
    }

    dirigir(km){ // consumo: 1l a cada 10km
        
        let consumo = distancia/this.gasolina
    }
}
class CarroA extends Carro{
    constructor(marca,cor,gasolinaRestante,consumo){
        super(marca,cor,gasolinaRestante){
            
        }
    }
}

let carro = new Carro('Wv','Cinza',100,14)

console.log(carro)