/*
    Sistema de Reservas de Voo

=>  Crie uma classe chamada "Voo" que representa um voo em um sistema de reservas de voo.

=>  A classe deve ter os seguintes atributos:

=>  codigoVoo: representando o código único do voo (string ou número).

=>  origem: representando a cidade de origem do voo (string).

=>  destino: representando a cidade de destino do voo (string).

=>  assentosDisponiveis: representando a quantidade de assentos disponíveis no voo (número).

    A classe deve ter os seguintes métodos:

=>  reservarAssento(): verifica se há assentos disponíveis no voo e, se houver, decrementa a 
quantidade de assentos disponíveis em um.

=>  consultarAssentosDisponiveis(): retorna a quantidade de assentos disponíveis no voo.


*/

class Voo{

    constructor(codigo,origem,destino,qtdeAssentos){
        this.codigo = codigo
        this.origem = origem
        this.destino = destino
        this.qtdeAssentos = qtdeAssentos
    }
    reservarAssentos(){

        if(this.qtdeAssentos <= 0){
            console.log('VOO SEM ASSENTOS DISPONÍVEIS')
            return
        }
        this.qtdeAssentos --
        console.log('Assento reservado com sucesso')
        
    }
    consultarAssentosDisponiveis(){
        return this.qtdeAssentos
    }

}

let voo170 = new Voo(1,'SLZ','REC',100)

let voo377 = new Voo(2,'SLZ','RJ',150)

voo170.reservarAssentos()

voo377.reservarAssentos()

console.log(voo170)
console.log(voo377)

console.log('qtde de assentos disponiveis voo 170:',voo170.consultarAssentosDisponiveis())

console.log('qtde de assentos disponiveis voo 377:',voo377.consultarAssentosDisponiveis())

voo170.reservarAssentos()
console.log('qtde de assentos disponiveis voo 170:',voo170.consultarAssentosDisponiveis())






