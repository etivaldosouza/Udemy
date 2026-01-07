/*
    Conta Bancária

Crie uma classe chamada "ContaBancaria" que representa uma conta bancária.

A classe deve ter os seguintes atributos:

numeroConta: representando o número da conta (string ou número).

saldo: representando o saldo da conta (número).

A classe deve ter os seguintes métodos:

depositar(valor): recebe um valor como parâmetro e adiciona esse valor ao saldo da conta.

sacar(valor): recebe um valor como parâmetro e verifica se o saldo é suficiente para efetuar o saque. Se for, realiza o saque subtraindo o valor do saldo. Caso contrário, exibe uma mensagem informando que o saldo é insuficiente.

consultarSaldo(): retorna o saldo atual da conta.




*/ 


class ContaBancaria {
    constructor(numeroConta, saldo) {
        
        if (saldo < 0) {
            throw new Error("Saldo inicial não pode ser negativo");
        }
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    depositarValor(valor) {
        if (valor <= 0) {
            console.log("Informe um valor a partir de 1 real");
            return;
        }
        this.saldo = this.saldo + valor;
    }
    sacarValor(valor) {
        if (valor <= 0) {
            console.log("Informe um valor a partir de 1 real");
            return;
        }

        if (valor > this.saldo) {
            console.log("Saldo Insuficiente");
            return;
        }

        this.saldo = this.saldo - valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
}

try {
    let minhaConta = new ContaBancaria(120166, -10);

    console.log(minhaConta);

    minhaConta.depositarValor(100);

    console.log(minhaConta);

    minhaConta.sacarValor(500);

    console.log(minhaConta);

    console.log(minhaConta.consultarSaldo());
} catch (e) {
    console.log('Erro ao criar conta:',e.message);
}



