/*
    Operador Instanceof

=> Podemos Verificar quem é o pai do objeto utilizando o instanceof


*/ 

class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}


class Cachorro extends Mamifero{
    constructor(patas,raca){
        super(patas)
        this.raca = raca
    }
} 


console.log(new Cachorro instanceof Mamifero) // verifica se Cachorro é classe filha de Maminfero


