/*
    Método join()

=> junta elementos de um array em uma frase, por meio de um separador 

=> retorna a união de todos os elementos de um array em forma de string.


=> pode-se especificar um caractere separador entre os elementos da string. o separador padrão é a virgula.

*/ 

//=======================================//

let frase = 'Testando o método split'

let palavras = frase.split(" ")
console.log(palavras)

let novaFrase = palavras.join('**')
console.log(novaFrase)

//================================//


let arr = [6,11,"x","y"]

console.log(arr.join('//'))

//================================//

let arr = [6,11,"x","y"]

console.log(arr.join()) // quando ñ informa o separador então vai a virgula q é o separador padrão



