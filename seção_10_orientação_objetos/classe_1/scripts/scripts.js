/*
    Classes

=> O Prototype do JavaScript pode ser chamado de classe

=> Pois nas outras Linguagens uma class é um molde de um objeto

=> ou seja, podemos criar diversos objetos em cima de um prototype

=> a ideia é reduzir o maximo de linhas de códigos através de um construtor(um molde) para criar outros objetos sem precisar ficar criando muitas linhas de códigos


*/ 

// veja os objetos criados manualmente(ou seja de forma literal):

const corredor1 = {

    nome:'Ayrton Senna',
    equipe: 'Mclaren',
    idade: 29,
    correr: function(){               //a propriedade o objeto que tem como valor uma função, é chamado de método
        console.log('VruuUU...')
    }
}

console.log(corredor1.nome)
console.log(corredor1.correr())

const corredor2 = {

    nome:'Max Verstappen',
    equipe: 'Red Bull Racing',
    idade: 26,
    correr: function(){
        console.log('VruuUU...')
    }

}

const corredor3 = {

    nome:'Lewis Hamilton',
    equipe: 'Mercedes',
    idade:32 ,
    correr: function(){
        console.log('VruuUU...')
    }
}

const corredor4 = {

    nome:'Charles Leclerc',
    equipe: 'Ferrari',
    idade: 26,
    correr: function(){
        console.log('VruuUU...')
    }

}

const corredor5 = {

    nome:'Lando Norris',
    equipe: 'MacLaren',
    idade: 27,
    correr: function(){
        console.log('VruuUU...')
    }

}

/*

=> levando-se em conta que queremos ter o menos trabalho repetitivo possível pois em quano programadores devemos passar essa tarefa ao computador devemos criar alternativas para digitar o menos linhas de códigos possível.

=> no caso acima temos como automatizar o processo de criação de objetos para ñ ter que ficar digitando varias vezes informacoes que são repetitivas.

*/ 


class pilotoFormula1 {
    nome = '';
    equipe = '';
    idade = 0;
    correr() {
    console.log('VruuUU...')
    }

}

const corredor1 = new pilotoFormula1()

console.log(corredor1)

corredor1.nome = 'Ayrton Sena'
corredor1.equipe = 'McLaren'
corredor1.idade = 29
corredor1.correr()

console.log(corredor1)


/*
 
    criando função construtor para gerar um objeto num formato especifico:

    a forma acima mesmo melhorando com relação a quantidade de linhas de códigos, ainda permanece muito longo o codigo. e por isso podemos enxugar mais ainda como veremos nas linhas abaixo:


*/ 

class pilotoFormula1 {
    constructor(nome,equipe,idade){  // lembrando que os parâmetros pode ser qualquer nome, o que importa é a ordem que está recebendo lá de baixo
        this.nome = nome
        this.equipe = equipe
        this.idade = idade
    } 
    correr() {
        console.log('VruuUU...')
    }
}

const corredor1 = new pilotoFormula1('AyrtonSenna','McLaren',29) // valores que vão ser os parâmetros la do constuctor

const corredor2 = new pilotoFormula1('Max Verstappen','Red Bull Racing',26)

const corredor3 = new pilotoFormula1('Lewis Hamilton','Mercedes',32)

const corredor4 = new pilotoFormula1('Charles Lecler','Ferrari',26)

const corredor5 = new pilotoFormula1('Lando Norris','McLaren',27)

console.log(corredor1)
corredor1.correr()

console.log(corredor2)

console.log(corredor3)

console.log(corredor4)

console.log(corredor5)

