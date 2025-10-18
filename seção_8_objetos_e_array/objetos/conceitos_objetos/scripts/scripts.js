/*
    Objetos:

=> é um valor que permite armazenar uma coleção de pares de chave(propriedade) e valor. ou seja, é como se eu tivesse uma variável que armazenasse outras variáveis.

*/ 

let usuario = {
    nome: 'Ayrton',
    idade: 26,
    youtube: 'Programador a Bordo'
}

console.log(usuario.nome,usuario.idade,usuario.youtube)

console.log(usuario)

// utilizando o destructuring do objeto:


let {nome: inome,idade: iidade, youtube: iyoutube} = usuario

console.log(inome,iidade,iyoutube)

usuario.ano = 2019 //adicionando nova propriedade

console.log(usuario)

delete usuario.idade

console.log(usuario)

//=======================================================

let usuario = {
    nome: 'Ayrton',
    idade: 26,
    youtube: 'Programador a Bordo'
}


usuario.hobbies = ['Música','Programar', 'Viajar']

console.log(usuario)

usuario.competencias = {
    linguagens: ['Python','Go', 'JavaScript','PHP'],
    instrumentosMusicais: ['Guitarra','Baixo','Bateria']
}

console.log(usuario)

//==============================================//

let usuario = {
    digaOi: function(name){
        return `olá ${name}`
    }
}


console.log(usuario.digaOi('Etivaldo!'))
console.log(usuario.digaOi('Carlos!'))


//forma curta de representar uma propriedade do objeto que é uma função:

let usuario = {
    digaOi(name){ //* retira os dois pontos e o nome function
        return `olá ${name}`
    }
}

console.log(usuario.digaOi('Etivaldo!'))


//====================================================//
/*
    como valor de uma chave do objeto, eu consigo passar uma variável já declarada anteriormente
    como propriedade desse objeto
*/

let cor = 'amarelo'


var usuario = {
    nome: 'Ayrton',
    idade: 25,
    cor: cor  //*
}

console.log(usuario)

//* obs: se o nome da propriedade é o mesmo nome da variável que quero passar valor(cor: cor) então posso abreviar. ex:


let cor = 'amarelo'

var usuario = {
    nome: 'Ayrton',
    idade: 25,
    cor          // ou cor: cor
}

console.log(usuario)