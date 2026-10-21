/*
    Getters e setters

=> métodos que vão setar propriedades

=> Get: serve para resgatar o valor de uma propriedade(verifica valor)

=> Set: serve para alterar o valor de uma propriedade(atribui valor)

*/ 


class Cachorro {
    
    constructor(racaDoCachorro){
        this.raca = racaDoCachorro
    }


    get verRaca(){
        return `A raça é ${this.raca}` 
    }

    set novaRaca(value){
        this.raca = value
    }
}

let pastor = new Cachorro('Pastor Alemão')

console.log(pastor.verRaca)

pastor.novaRaca = 'Golden'

console.log(pastor.verRaca)



//======================================================================//

class Cachorros {
    constructor(racaDoCachorro,corDoCachorro){
        this.raca = racaDoCachorro
        this.cor = corDoCachorro
    }

    latir(){
        return 'AuAuAu...'
    }

    get verCor(){
        return this.cor
    }

    get verRaca(){
        return this.raca
    }

    set novaCor(valor){        // o set só pode receber um único valor como parâmetro
        this.cor = valor
    }
    set novaRaca(racaNova){
        this.raca = racaNova
    }
}

let pastor = new Cachorros('Pastor Alemão','Preto')
console.log(pastor)

// altera cor
pastor.novaCor = 'Amarelo'

console.log(pastor.verCor)
console.log(pastor.latir())


// alterar raca:

pastor.novaRaca = 'Poodle'
console.log(pastor.verRaca)
console.log(pastor.latir())



//================================================================//

class Pm {
    constructor(nomeDoPm,barraDoPm,batalhaoDoPm,idDoPm){
        this.nome = nomeDoPm
        this.barra = barraDoPm
        this.batalhão = batalhaoDoPm
        this.id = idDoPm
    }

    identifica(){
        console.log(`Nome: ${this.nome}, Barra: ${this.barra},Batalhão: ${this.batalhão}, Id: ${this.id}`)
    }

    get getBpm(){
        return this.batalhão
    }

    set setBpm(bpm){
        this.batalhão = bpm
    }
}

let mike = new Pm('Etivaldo',14,'20ºBPM',822297)

console.log(mike)

mike.setBpm = '9ºBPM'

console.log(mike)

mike.identifica()

console.log(`Batalhão: ${mike.getBpm}`)
