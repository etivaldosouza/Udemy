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
        this.gasolinaRestante = gasolinaRestante
        
    }

    dirigir(km){  
        
        let litrosConsumidos = km / this.consumo

        if(this.gasolinaRestante >= this.consumo){
            this.gasolinaRestante = this.gasolinaRestante - litrosConsumidos
            console.log(`Você dirigiu ${km} km.`)
            console.log(`Gasolina restante: ${this.gasolinaRestante} litros`)
        }else{
            console.log("Gasolina insuficiente para essa distância!")
        }
    }

    abastecer(litros) {
        this.gasolinaRestante = this.gasolinaRestante + litros
        console.log(`abastecido com ${litros} litros`) 
    }
    autonomia(){
        let kmRestante = this.gasolinaRestante * this.consumo
        return `você tem uma autonomia de ${kmRestante} Km`
    }
}
class CarroA extends Carro{
    constructor(marca,cor,gasolinaRestante,consumo){

        super(marca,cor,gasolinaRestante)
        this.consumo = consumo
        
    }
}

let carro = new CarroA('Wv','Cinza',0,16)

console.log(carro)

carro.abastecer(51)

console.log(carro.autonomia())

carro.dirigir(350)

console.log(carro)

carro.abastecer(10)

carro.dirigir(500)

console.log(carro)

carro.abastecer(5)

console.log(carro)

