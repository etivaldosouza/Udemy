class contadorPalavras{
    constructor(){

    }
    contarPalavras(str){

        let tratarTexto = str.trim().replace(/\s+/g, " ") // remove espaços extras no começo e no fim  da string e tb remove os espaços internos à str

        if(tratarTexto === ''){ // se a string estiver vazia, retorna 0
            return 0
        }

        let contagem = tratarTexto.split(" ")

        return contagem.length
    }
}   

let quantidade = new contadorPalavras()

console.log(quantidade.contarPalavras(' irei    trabalhar    amanhã     pela      manhã         '))



//===========================================================================//



let texto = ' irei    trabalhar    amanhã     pela      manhã         '

let tratarTexto = texto.trim().replace(/\s+/g,"")

let resultado = tratarTexto
console.log(resultado)

console.log(resultado.length)





/*
Conceito importante:

split('') cria um array de caracteres

Mas não é obrigatório para contar caracteres(caso queira contar letras por exemplo ñ preciso splitar.)

length funciona direto na string

*/ 


let txt = ' irei    trabalhar    amanhã     pela      manhã         '

let tratarTxt = txt.trim().replace(/\s+/g," ")

let res = tratarTxt.split(' ')

console.log(res)

console.log(res.length)