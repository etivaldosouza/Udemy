/*
    Exercício 05

=> Crie uma classe conta bancaria

=> Com as Propriedades de saldo na conta corrente,saldo na conta poupança e juros da poupança

=> Crie Métodos de depósitos e saque, também um método para transferir dinheiro da poupança para a conta corrente.

=> Além disso crie uma conta especial que herda da conta normal

=>  Na conta especial os juros são dobrados da conta normal.

*/ 





class ContaBancaria {
    constructor(saldoCc,saldoPoupanca,jurosPoupanca){
        this.saldoCc = saldoCc
        this.saldoPoupanca = saldoPoupanca
        this.jurosPoupanca = jurosPoupanca
        this.extrato = []
    }

    depositar(valor){
        if(valor <= 0) {
            console.log('❌ Valor de depósito inválido')
            return          // impede de ir p/ linha de baixo(impede de aceitar o valor negativo)
        }
        this.saldoCc = this.saldoCc + valor
        this.extrato.push(`➕ Depósito: R$ ${valor}`)
    }

    sacar(valor){
        if(valor <= 0){
            console.log(`❌ Valor de saque inválido!`)
            return
        }
        if(valor > this.saldoCc){
            console.log('❌ Saldo insuficiente')
            return
        }
        this.saldoCc = this.saldoCc - valor
        this.extrato.push(`⛔ Saque: ${valor}`)
    }

    transferirParapoupanca(valor){
        if(valor <= 0){
            console.log(`❌ valor inválido`)
            return
        }
        if(valor > this.saldoCc){
            console.log('❌ Saldo insuficiente na conta corrente')
            return
        }

        this.saldoCc = this.saldoCc - valor
        this.saldoPoupanca = this.saldoPoupanca + valor
          
        this.extrato.push(`Transferência CC → Poupança: R$ ${valor}`)
    }

    transferirParaCorrente(valor){
        if(valor <= 0){
            console.log(`❌ valor inválido`)
            return
        }
        this.saldoPoupanca = this.saldoPoupanca - valor
        this.saldoCc = this.saldoCc + valor
        console.log('Conta Poupança')
        console.log(`R$ ${valor} reais transferido para sua conta corrente`)
        this.extrato.push(`⛔ R$ ${this.saldoCc}`)
    }

    jurosdeAniversario(){
        let juros = this.saldoPoupanca * (this.jurosPoupanca / 100)
        this.saldoPoupanca = this.saldoPoupanca + juros
        this.extrato.push(`Rendimentos: R$ ${juros}`)
        
    }
    verExtrato(){
        console.log('📄 Extrato da conta:')
        this.extrato.forEach(item => console.log(item))
        console.log(`💰 Saldo Conta Corrente: R$ ${this.saldoCc}`)
        console.log(`💰 Saldo Conta Poupança: R$ ${this.saldoPoupanca}`)
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(saldoCc,saldoPoupanca,jurosPoupanca){
        super(saldoCc,saldoPoupanca,jurosPoupanca * 2)  // O cálculo vai no super pq o construtor da classe pai é quem define a propriedade, e a classe filha só envia o valor correto.
    }
}


conta = new ContaBancaria(1000,5000,1)
console.log(conta)

conta.sacar(500)

conta.depositar(5000)

conta.transferirParapoupanca(3000)

conta.jurosdeAniversario()

conta.verExtrato()


let contablack = new ContaEspecial(10000,50000,1)

console.log(contablack)

contablack.sacar(5000)

contablack.jurosdeAniversario()

contablack.verExtrato()
