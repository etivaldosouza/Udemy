/*
    this:

=> é uma referência a um objeto que está sendo usado. exemplo se estivermos um objeto pessoa e estivessemos acessando sua propriedade nome poderiamos substituir o nome pessoa por this. exemplo:
    pessoa.nome == this.name

*/ 



/*
 => console.log(this) 

=> quando chamo o diz no escopo global o this vai valer window.(se abrirmos o inspecionar vamos ver o objeto window com todos os elementos do navegador)

=> ñ funciona com aerow function

 */ 


const pessoa1 = {
    nome: 'Bob Esponja',
    comidaFavorida: 'Hamburguers',
    mensagem: function(){
    console.log(`olá eu sou ${this.nome}`)
    },
    comer: function(){
        console.log(`${this.nome} está comendo ${this.comidaFavorida}`)
    }
}

const pessoa2 = {
    nome: 'Patrick',
    comidaFavorida: 'Pizza',
    mensagem: function(){
    console.log(`olá eu sou ${this.nome}`)
    },
    comer: function(){
        console.log(`${this.nome} está comendo ${this.comidaFavorida}`)
    }
}

pessoa1.mensagem()
pessoa1.comer()

pessoa2.mensagem()
pessoa2.comer()




//===================================================//

//alterando o this com o operador new

function usuario(){
    
    console.log(this) 

}

//usuario()

new usuario()  // o this passa agora a ser o objeto usuario


// obs: eu utilizo o operador new para alterar o this do objeto. ======================================================//

function usuario(){
    this.nome = 'Etivaldo'
    this.idade = 42
    this.profissao = 'Militar'
    this.soma = function(a,b){
        return a + b
    }
    
}


console.log(new usuario())

let objeto = new usuario() //como o new usuario retorna o this e o this é objeto entao podemos armazenar esse objeto em uma variável
console.log(objeto)

console.log(objeto.nome)
console.log(objeto.soma(10,2))

// sempre que invoca uma function com operador new ele retorna sempre um this e o this é um objeto e sendo um objeto a gente vai ter acesso as propriedades nome, idade e soma.


//=============== mais exemplo ==========//

function militar(){
    console.log(this)  // o this vale window
}

militar()


// invocando com o operador new() 



function militar(){
    console.log(this)  
}

new militar() // o this deixa de ser o objeto window e passa agora a referenciar o objeto militar


// então como this é o objeto militar, então para eu adicionar as propriedades e métodos ao objeto militar faremos:



function militar(){

    this.nome = 'Etivaldo'  // o this vale window
    this.graduacao = 'Cabo'
    this.id =  822297
        
}


console.log(new militar())     // sempre que invocarmos uma function com operador new ele retorna sempre o this e o this é um objeto e sendo um objeto a gente vai ter acesso as propriedades nome, idade e soma.


