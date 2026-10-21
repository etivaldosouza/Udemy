/*


*/ 



/*
const meuObjeto = {
    a: 1,
    b: 2
}
    cadeia de prototype do objeto acima:

    meuObjeto.__proto__ ==> Object.prototype ==> null

*/ 


/*
const meuArray = [1,2,3, 'a','b']

    cadeia de prototype do array acima
    meuArrayl.__proto__ ==> Object.prototype ==> null
*/ 




/*
function minhaFuncao(){
    return 1 * 2
}
    cadeia de prototype da função acima
    minhaFuncao.__proto__ ==> Object.prototype ==> null
*/ 



const meuObjeto = {
    a: 1,
    b: 2
}

const novoObjeto = Object.create(meuObjeto)

novoObjeto.b = 6
novoObjeto.novaPropriedade = 3

console.log(meuObjeto)
console.log(novoObjeto)

console.log(meuObjeto.b + novoObjeto.b)

console.log(meuObjeto.hasOwnProperty('map')) // quando quero saber se tem a propriedade map





function salaAula(alunos){
    this.alunos = alunos
}

salaAula.prototype = {
    adicionarAluno: function(aluno){
        this.alunos.push(aluno)
    }
}

const minhaSala = new salaAula(['João','Maria'])

console.log(minhaSala)

minhaSala.adicionarAluno('pedro')

console.log(minhaSala.alunos)
