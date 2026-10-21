/*
    split()

=>  divide uma string por um separador, e retorna um array

=> os parâmetros separador e limite são opcionais:  split(separado,limite)

*/ 

//=================================================

let frase = "o rato roeu a roupa do rei de roma"

let palavras = frase.split()

console.log(palavras)


//==============================================

let frase = "o rato roeu a roupa do rei de roma"

let palavras = frase.split("")

console.log(palavras)


//===============================================

let frase = "o rato roeu a roupa do rei de roma"

let palavras = frase.split(" ")

console.log(palavras)


//==============================================

let frase = "o rato roeu a roupa do rei de roma"

let palavras = frase.split("",8)

console.log(palavras)

//=================================================


let frase = "o rato roeu a roupa do rei de roma"

let palavras = frase.split(" ",4) // o primeiro define o caractere para separar a sustring do array e o segundo é o número inteiro que especifica a quantidade de itens do array que eu quero que tenha

console.log(palavras)


//================================================//


let frase = 'Banana;Maçã;Jaca;Pera;Bola;Tapete'

console.log(frase.split(';'))

console.log(frase.split(','))


//==============================================

let data = '23/11/1983'

let splitar = data.split('/')
console.log(splitar)
