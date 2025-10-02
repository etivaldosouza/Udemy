/*
    JSON

=> JSON = JavaScripts Object Notation

=> Utilizado para comunicação entre serviços, ex: back end <-> front end

=> Basicamente um tipo de dado padronizado, que lembra muito os objetos do javaScript


=> Rigoroso na estrutura, ou seja, você deve seguir o padrão imposto por esse formato que são:

* apenas aspas duplas
* não aceita comentários

*/


let pessoa = {

    "nome": "Matheus",
    "idade": 28
}

// igual ao objeto para acessar as propriedades

console.log(pessoa.nome)
console.log(pessoa.idade)

//==============================================================//

// formato padrão

{
    "name": "Matheus",
    "age": 29,
    "position": "Developer",
    "languages": ["PHP","JavaScripts","Python"]

}

