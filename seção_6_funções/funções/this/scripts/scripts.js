/*
    this:


*/ 

function usuario(){
    
    console.log(this) // o this é o proprio objeto

}
 new usuario()


//======================================================//

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

