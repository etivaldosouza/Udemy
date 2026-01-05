/*
    Calculadora de retângulo
    
=> Crie uma classe chamada Retângulo que represente um retangulo.

1. A classe deve ter os seguintes atributos:

    => largura: representa a largura do retângulo(número maior que zero)

    => altura: representa a altura do retamgulo(número maior que zero)

2. A classe deve ter os seguintes métodos:

 calcularArea() : retorna a área do retangulo(largura * altura)

 calcularPerimetro(): retorna o perímetro do retângulo(2 *(largura + altura))

*/ 


class Retangulo{
    constructor(largura,altura){

        if (largura <= 0 || altura <= 0) {

            throw new Error("Largura e altura devem ser maiores que zero")
        }
        
        this.largura = largura
        this.altura = altura
    }
    calcularArea(){

        let area = this.largura * this.altura
        return area

    }
    calcularPerimetro(){

        let perimetro = 2 * (this.altura + this.largura)
        return perimetro
    }
}

try{
    
    let calculadoraRetangulo = new Retangulo(3,-2)


    console.log(calculadoraRetangulo.calcularArea())

    console.log(calculadoraRetangulo.calcularPerimetro())

}catch(erro){
    console.log(erro.message)
}




//============================================================================//



class Retangulo{
    constructor(largura,altura){

        if (largura <= 0 || altura <= 0) {

            throw new Error("Largura e altura devem ser maiores que zero")
        }
        
        this.largura = largura
        this.altura = altura
    }
    calcularArea(){

        return this.largura * this.altura
        
    }
    calcularPerimetro(){

        return 2 * (this.altura + this.largura)
    }
}

try{
    
    let calculadoraRetangulo = new Retangulo(3,2)


    console.log(calculadoraRetangulo.calcularArea())

    console.log(calculadoraRetangulo.calcularPerimetro())

}catch(erro){
    console.log(erro.message)
}