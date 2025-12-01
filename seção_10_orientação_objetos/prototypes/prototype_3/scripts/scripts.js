const pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa)) // p/ saber o prototype do objeto pessoa


console.log(Object.getPrototypeOf(pessoa) === Object.prototype)


// criando um novo objeto usando como referencia um objeto existente:

const Pessoa = {
    maos: 2
}

const pessoaNova = Object.create(Pessoa) 

console.log(pessoaNova.maos) // está acessando(herdando) a propriedade maos do objeto herdado pessoa porém pessoaNova ñ tem a propriedade maos.

console.log(pessoaNova.hasOwnProperty('maos')) // p/ saber se existe a propriedade maos no objeto pessoaNova

console.log(Object.getPrototypeOf(pessoaNova) === pessoa) // quero saber se pessoa é prototype de pessoaNova


/*
    o que está acontecendo:

=>  object.create(pessoa) cria um novo objeto vazio, mas com o protótipo apontando para o objeto pessoa.

Ou seja:

=>  pessoaNova não tem a propriedade maos própria,

=>  mas ele herda maos do protótipo, que é o objeto pessoa.



obs: mesmo eu nao criando o metodo hasOwnProperty para o pessoa ele pode ser utilizado pois o objeto pessoa ta herdando esse metodo do seu prototype Object. por tanto o objeto pessoa vai poder utilizar os mesmos métodos do Object.

*/ 



//========================================================================================================//


const animal = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom: function(){
        console.log(this.som)
    }
}


let gato = {
    som: 'MiaaAAuUU',
    tipo: 'gato'
}

Object.setPrototypeOf(gato,animal) // to dizendo que a classe animal vai ser pai(prototipo) da classe gato

gato.emitirSom()

// a classe gato procura a propriedade emitirSom em sua instância e como não tem ela vai buscar na classe animal.




//==================================================================================================================//


const animal = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom: function(){
        console.log(this.som)
    }
}


let gato = {
    som: 'MiaaAAuUU',
    tipo: 'gato'
}

let gatoRaivoso ={
    tipo: 'gatoRaivoso',
    miarForte: function(){
        console.log(this.som.toUpperCase())
    }
}

let cachorro = {
    som: 'Au Au...',
    tipo: 'Cachorro',
    emitirSom: function(){
        console.log(this.som + this.som)
    }
}

Object.setPrototypeOf(gato,animal) // to dizendo que a classe animal vai ser pai(prototipo) da classe gato

gato.emitirSom()

Object.setPrototypeOf(gatoRaivoso,gato) 

gatoRaivoso.miarForte()  // quando chamo a função miarForte ela vai executar ela, porém ñ existe a propriedade som dentro do gatoRaiovoso então ela vai buscar no seu prototype(gato)

Object.setPrototypeOf(cachorro,animal)

cachorro.emitirSom()



//============================  identificando se existe determinada propriedade nos objetos: ==============================//

console.log(gato.hasOwnProperty('som'))

console.log(gatoRaivoso.hasOwnProperty('som'))


