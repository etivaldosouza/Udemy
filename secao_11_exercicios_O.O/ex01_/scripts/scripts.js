/*
    Exercício 1:

=> Crie uma classe que simula uma conta no banco(utilize a forma que preferir)

=> Deve conter a propriedade saldo

=> e os métodos depósito e saque

=> Teste os métodos

*/


class Conta{
    constructor(saldo){
        this.saldo = saldo
    }

    depositar(valor) {

        if(valor <= 0) {
            console.log('❌ Valor de depósito inválido')
            return                        // impede de ir p/ linha de baixo(aceitar o valor negativo)
        }
        
        this.saldo = this.saldo + valor
        console.log(`✅ Depósito de R$ ${valor} realizado`)
    }
    sacar(valor){

        if (valor <= 0) {
            console.log('❌ Saque inválido')
            return
        }

        if(valor > this.saldo){
            console.log('❌ Saldo insuficiente')
            return
        }
        this.saldo = this.saldo - valor
        console.log(`você sacou R$ ${valor} seu saldo atual é ${this.saldo}`)
    }
}

let minhaConta = new Conta(1000)

console.log(minhaConta)

minhaConta.depositar(1000)

console.log(minhaConta)

minhaConta.sacar(-500)

console.log(minhaConta)



//==============================================================

class Conta {
    constructor(saldoInicial) {
        this.saldo = saldoInicial
        this.extrato = []
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log('❌ Depósito inválido')
            return
        }

        this.saldo += valor
        this.extrato.push(`+ Depósito: R$${valor}`)
    }

    sacar(valor) {
        if (valor <= 0) {
            console.log('❌ Saque inválido')
            return
        }

        if (valor > this.saldo) {
            console.log('❌ Saldo insuficiente')
            return
        }

        this.saldo -= valor
        this.extrato.push(`- Saque: R$${valor}`)
    }

    verExtrato() {
        console.log('📄 Extrato da conta:')
        this.extrato.forEach(item => console.log(item))
        console.log(`💰 Saldo atual: R$${this.saldo}`)
    }
}


let minhaConta = new Conta(2000)

minhaConta.depositar(1200)
minhaConta.sacar(500)
minhaConta.depositar(300)

minhaConta.verExtrato()



class Contador {
    constructor(valor){
        this.valor = valor
    }
    incrementar(incremento){
        this.incremento = this.incremento +  this.valor  
    }

    decrementar(decremento) {
        this.decremento = this.valor - this.decremento
    }
}

let meuValor = new Contador(10)

console.log(meuValor)

meuValor.incrementar(20)

console.log(meuValor)