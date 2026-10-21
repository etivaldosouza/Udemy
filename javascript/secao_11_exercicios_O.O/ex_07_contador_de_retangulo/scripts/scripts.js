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

// message => faz referencia ao erro lá do throw new Error.



/*
    O que é o try?

=>  try significa "tente executar este código"

=>  Ele envolve um bloco onde pode acontecer um erro

    Na prática:

=>  O JavaScript tenta executar tudo dentro do try

=>  Se não houver erro, o catch é ignorado

=>  Se houver erro, a execução pula imediatamente para o catch

    exemplo:

    ...new Retangulo(3, -2)


➡️ dispara um erro por causa do throw new Error(...)


    O que é o catch?

=>  Ele captura o erro que foi lançado dentro do try

=>  O parâmetro erro é o objeto de erro criado pelo new Error()


    O que é erro.message?

=>  É a mensagem que você definiu no throw

*/ 


/*
    Resumo rápido

    Palavra	                Função

    throw	            Lança um erro manualmente

    new Error()	        Cria um objeto de erro

    try	                Tenta executar um bloco de código

    catch	            Captura e trata o erro

*/ 