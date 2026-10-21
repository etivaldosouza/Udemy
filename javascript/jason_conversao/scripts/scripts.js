/*
    JSON para String

=> Podemos converter o JSON para uma string de forma fácil( jason.stringify() )

=> ou também uma string para JSON(json.parse)


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


console.log(pessoa.nome)

let pessoaTexto = JSON.stringify(pessoa) //convertendo jason p/ str (quando quero enviar em formato texto.)

console.log(pessoaTexto) 
console.log(typeof(pessoaTexto))

console.log(pessoa.nome)


// transformando de texto para json

let textoJson = JSON.parse(pessoaTexto) 

console.log(textoJson)
console.log(typeof(pessoaTexto))

console.log(textoJson.nome) // como ta em formato json eu consigo acessar as propriedades 



