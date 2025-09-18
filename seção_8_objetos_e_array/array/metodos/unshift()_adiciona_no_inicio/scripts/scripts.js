/*
    unshift()

=> adiciona elemento no início do array e retorna a nova quantidade de elementos do array 

*/ 

let frutas = ["Macã","Melão","Uva"]

let novaFruta = frutas.unshift("Pêra")

console.log(novaFruta)

console.log(frutas)

//==============================================//

let carros = ["Bmw","Vw","Fiat"]

carros.shift()

console.log(carros)

carros.unshift("Gurgel")

console.log(carros[0]) // modo antigo de acessar um elemento do array

console.log(carros)


// destructuring: modo moderno de acessar um elemento no array

let carros = ["Bmw","Vw","Fiat"] // array

carros.shift()

let [marca1,marca2,marca3] = carros


console.log(marca1)