const pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa)) // p/ saber o prototype do objeto pessoa


console.log(Object.getPrototypeOf(pessoa) === Object.prototype)


// criando um novo objeto usando como referencia um objeto existente:

const pessoa = {
    maos: 2
}

const pessoaNova = Object.create(pessoa) 

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



const animal = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom: function(){
        console.log(this.som)
    }
}

animal.emitirSom()