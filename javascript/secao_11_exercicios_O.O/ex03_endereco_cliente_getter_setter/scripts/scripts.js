/*
    Exercício 03

=> Crie um objeto que simula um endereço de um cliente

=> Propriedades: Rua, Bairro, Cidade, Estado

=> No construtor o endereço já deve ser definido por completo

=> Crie métodos para atualizar todas as propriedades

*/ 


class EnderecoCompleto {
    constructor(rua,bairro,cidade,estado) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
    get verEndereco(){
        return `O novo endereco é: ${this.rua},${this.bairro},${this.cidade},${this.estado}`
    }
    set novaRua(novaRua){
        this.rua = novaRua
        
    }
    set novoBairro(novoBairro){
        this.bairro = novoBairro
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade
    }
    set novoEstado(novoEstado){
        this.estado = novoEstado
    }
}

let endereco = new EnderecoCompleto('Rua 35','Alto do Turu 1','São Jose de Ribamar','MA') // instanciando objeto

console.log(endereco)

endereco.novaRua = 'Rua 108'
endereco.novoBairro = 'Maiobão'
endereco.novaCidade = 'Paço do Lumiar'
endereco.novoEstado = 'Maranhão'

console.log(endereco)

console.log(endereco.verEndereco)

console.log(endereco instanceof EnderecoCompleto) // saber se EnderecoCompleto é o objeto pai de endereco


//=========================================================//

// fazendo por heranca


class EnderecoCompleto {
    constructor(rua,bairro,cidade,estado) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
}

class enderecoAtualizado extends EnderecoCompleto {
    constructor(rua,numero,complemento,bairro,cidade,estado){
        super(rua,bairro,cidade,estado)
        this.numero = numero
        this.complemento = complemento
    }
}

let endereco1 = new enderecoAtualizado('Rua 35','2A','Quadra 2','Alto do turu 1','São José de Ribamar','MA')

console.log(endereco1)

