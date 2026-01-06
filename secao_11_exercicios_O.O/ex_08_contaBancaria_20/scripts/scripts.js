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



