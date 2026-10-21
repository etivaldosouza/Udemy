/*
    Sistema de Gerenciamento de Armas

*/

class Arma {
    constructor(modelo, serie) {
        this.modelo = modelo
        this.serie = serie
        this.disponivel = true
    }

    cautelar() {
        if (!this.disponivel) {
            console.log(`A arma ${this.serie} já está cautelada`)
            return
        }

        this.disponivel = false
        console.log(`Arma ${this.serie} cautelada com sucesso`)
    }

    devolver() {
        if (this.disponivel) {
            console.log(`A arma ${this.serie} já foi devolvida`)
            return
        }

        this.disponivel = true
        console.log(`Arma ${this.serie} devolvida com sucesso`)
    }

    consultarDisponibilidade() {
        return this.disponivel
    }
}


class Cautela{

    constructor(){

        this.armas = []

    }
    adicionarArma(arma){

        this.armas.push(arma)
        console.log(`Arma ${arma.serie} adicionada ao sistema`)
    }
    listarArmas(){
        this.armas.forEach(arma => {
            console.log(`Modelo: ${arma.modelo} | Série: ${arma.serie} | Disponível: ${arma.disponivel}`)
        })
    }
    cautelarArma(serie) {
        const arma = this.armas.find(a => a.serie === serie)

        if (!arma) {
            console.log(`Arma de série ${serie} não encontrada`)
            return
        }

        arma.cautelar()
    }

    devolverArma(serie) {
        const arma = this.armas.find(a => a.serie === serie)

        if (!arma) {
            console.log(`Arma de série ${serie} não encontrada`)
            return
        }

        arma.devolver()
    }
}


const cautela = new Cautela()

const arma1 = new Arma('PT840', 'SHO0894')
const arma2 = new Arma('Fuzil IA2', 'EB12345')


cautela.adicionarArma(arma1)
cautela.adicionarArma(arma2)

cautela.listarArmas()


cautela.cautelarArma('SHO0894')
cautela.cautelarArma('SHO0894') // tentativa inválida

cautela.devolverArma('SHO0894')
cautela.devolverArma('SHO0894') // tentativa inválida