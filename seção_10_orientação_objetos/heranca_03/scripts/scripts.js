class Mamifero {

    constructor(especieDoMamifero,nomeDoMamifero,idadeDoMamifero){

        this.especie = especieDoMamifero
        this.nome = nomeDoMamifero
        this.glandula = true
        this.idade = idadeDoMamifero
    }

    incrementoIdade(){
        this.idade++
    }

}

class Leao extends Mamifero{
    constructor(especieDoMamifero,nomeDoMamifero,idadeDoMamifero,comeHumanos){
        super(especieDoMamifero,nomeDoMamifero,idadeDoMamifero)
        this.comeHumanos = comeHumanos
    }
    comerZebras(animais) {
        return animais.filter(animal => animal.especie != 'Zebra')
    }

}

const zeca = new Mamifero('Zebra','Zeca',6)

const pompeu = new Mamifero('gnu','Pompeu',5)

const angus = new Mamifero('cavalo','Angus',3)

const mufasa = new Leao('Leão','Mufasa',4,false)

console.log(mufasa,pompeu)

const animais = [zeca,pompeu,angus]

console.log(mufasa.comerZebras(animais))

