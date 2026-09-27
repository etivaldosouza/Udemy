//  this como window

function usuario(){ 
    console.log(this) // nesse caso o this é o elemento pai acima da função q no caso é o objeto window
}

usuario()

//===========================


// alterando o valor de this com new(uma delas):


function usuario(){ 
    console.log(this) 
}

new usuario()

//======================

function usuarios(){ 
    this.name = 'Etivaldo'
    this.idade = '42'
    this.id = '822294'
}

console.log(new usuarios()) 
// Quando se invoca uma function com operador new ele vai sempre retornar o this que nesse caso o this é um objeto e esse objeto vou ter acesso as suas propriedades.

let user = new usuarios() // se this é objeto posso armazenar em uma variável

console.log(user.name)
console.log(user.idade)


//===============================

// arrow functions

var soma = (a,b) => {
    return a + b
}

console.log(soma(2,4))


// outra arrow function

let retornaUsuario = () => ({nome: 'João', idade: 30}) // como essa arrow function está retornando um objeto esse objeto deve obrigatoriamente esta protegido por parenteses p/ ñ confundir a chaves do objeto com a chave do return q se fosse o caso iria da erro pois no caso da funcao acima q retorna algo imediatamente ñ se usa a palavra return.

console.log(retornaUsuario())



const users = {
    nome: 'etivaldo',
    nomeUsuario(){
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log('UsuarioNome:' + self.nome)
        }, 500)
    }
}

users.nomeUsuario()