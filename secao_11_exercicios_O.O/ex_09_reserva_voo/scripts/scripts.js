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
        this.qtdeAssentos = qtdeAssentos
    }
    reservarAssentos(valor){
        this.qtdeAssentos = this.qtdeAssentos - 1
        return this.qtdeAssentos
    }

}