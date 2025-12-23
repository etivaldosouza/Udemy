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