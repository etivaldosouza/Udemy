/*
    JSON para String

=> Podemos converter o JSON para uma string de forma fácil

=> ou também uma string para JSON


*/ 


const car = {

    "brand": "BMW",
    "wheels": 4,
    "doors": 2,
    "type": "Sedan"
}



let jsonToString = JSON.stringify(car)

console.log(jsonToString)

let stringToJson = JSON.parse(jsonToString)

console.log(stringToJson)


//==========================================================//


let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "profissão": "Programador",
    "hobbies": ["Video game","Leitura","Correr"]
}

let pessoaTexto = JSON.stringify(pessoa) // quando quero enviar em formato texto.

console.log(pessoaTexto) 

console.log(pessoaTexto)
 
let textoJson = JSON.parse(pessoaTexto) // transformando de texto para json

console.log(textoJson)

console.log(textoJson.nome) // como ta em formato json eu consigo acessar as propriedades 



