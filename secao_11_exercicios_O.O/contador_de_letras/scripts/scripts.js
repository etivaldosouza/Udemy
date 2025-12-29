/*
    Contador de Letras

=> Crie uma classe que conte quantas letras existem em uma frase, ignorando espaços

=> espaços não contam

=> acentos contam como letras normais

=> números e simbolos não contam.

*/ 


class LetterCounter{
    constructor(){

    }
    countLetter(str){
        
    let textoTratado = str.trim().replace(/\s+/g,"")

    let letter = textoTratado.split('')

    if(letter[0] === ''){
        return 0
    }
    return letter.length
}

}

   

let counter = new LetterCounter()

console.log(counter.countLetter('olá mundo!!'))


let texto = 'Olá mundo!!'
texto.trim().replace(/\s+/g,"")
let arr = texto.split('')
console.log(arr.length)
