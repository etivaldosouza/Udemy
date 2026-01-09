/*
    
    Sistema de Cautela de Armas

=>  Crie uma classe chamada "Arma" que representa uma Arma em um sistema de Cautela.

=>  A classe deve ter os seguintes atributos:

=>  modelo: representando o modelo da arma (string).

=>  serie: representando o nr de serie da arma (string).

=>  disponivel: representando a disponibilidade da arma (boolean).

    A classe deve ter os seguintes métodos:

=>  cautelar(): verifica se a arma está disponível para cautela e, se estiver, atualiza a disponibilidade para false.

=>  devolver(): verifica se a arma não está disponível para cautela e, se não estiver, atualiza a disponibilidade para true.

=>  consultarDisponibilidade(): retorna a disponibilidade atual da arma.


*/


class Arma{
    constructor(modelo,serie,disponivel){
        this.modelo = modelo
        this.serie = serie
        this.disponivel = disponivel
    }
    cautelar(){
        if(this.disponivel === true){
            this.disponivel = false
            console.log(`arma ${this.serie} cautelada com sucesso`)
            return
        }
        console.log(`a arma ${this.serie} ñ está disponível`)
    }
    devolver(){
        if(this.disponivel === false){           
            console.log(`a arma ${this.serie} já está disponível`)
            return
        }

        this.disponivel = true
                
    }
    consultarDisponibilidade(){
        return this.disponivel
    }
}


let arma1 = new Arma('PT840','SHO0894',false)

console.log(arma1.consultarDisponibilidade())

arma1.cautelar()

arma1.devolver()
arma1.devolver()