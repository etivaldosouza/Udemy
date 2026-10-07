/*
    Destructuring    

*/ 

/*

Com Objeto:

*/ 


const pessoa = {
    name: 'Elton',
    age: 26
}

const { name } = pessoa

console.log(name)


// renomeando propriedades

const pm = {
    name: 'Etivaldo',
    age: 43
}

const {name: nome, age: idade} = pm

console.log(`O policial chama-se ${nome} e tem ${idade} anos`)


// com variáveis que já existem:

