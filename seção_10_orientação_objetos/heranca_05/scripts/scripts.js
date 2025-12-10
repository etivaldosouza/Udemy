class Robo {
    constructor(nomeDoRobo,paisDoRobo){
        this.nome = nomeDoRobo
        this.pais = paisDoRobo
    }

    andar() {
        console.log(`o ${this.nome} está andando`)
    }
    falar(){
        console.log(`o ${this.nome} está falando`)
    }
}


class MeuRobo extends Robo {
    constructor(nomeDoRobo,paisDoRobo,fabricacaoDoRobo){
        super(nomeDoRobo,paisDoRobo)
        this.fabricacao = fabricacaoDoRobo
    }
}


const boot = new MeuRobo('Zeca','Brasil',2025)

console.log(boot)

console.log(boot.fabricacao)
boot.andar()
boot.falar()

const tesla = new Robo('Tesla','EUA') 

console.log(tesla.nome)
console.log(tesla.pais)
tesla.falar() 
tesla.andar()

