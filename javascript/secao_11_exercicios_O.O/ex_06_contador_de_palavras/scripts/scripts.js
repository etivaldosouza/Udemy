/*
    contador de palavras

=> Crie uma classe de wordCounter que representa um contador de palavras

=> A classe deve ter um construtor que inicializa um objeto vazio

=> A classe deve ter um método chamado countWords que recebe uma str como parâmetro

=> O método countWords deve contar o número de palavras na string fornecida e retornar o resultado

=> considere que as palavras são separadas por espaços em branco

*/

class wordCounter {
    constructor(){
    // objeto vazio, sem propriedades iniciais
    }

    countWords(str) {
        const textoTratado = str.trim().replace(/\s+/g, " ")  // remove espaços extras no começo e no fim  da string e tb remove os espaços internos à str
        if(textoTratado === "") { // se a string estiver vazia, retorna 0
            return 0
        }
    
        const palavras = textoTratado.split(" ")  // separa as palavras pelos espaços
        return palavras.length
    }
}

const contador = new wordCounter()

console.log(contador.countWords('  irei    trabalhar    amanhã     pela      manhã   '))


/*
    relembrando o split()

    parâmetros(opcionais): separador e limite

    .split(separdor,limite)

    exemplo: .split(8,'') => separa por caracteres da string
             .split(8, ' ') => separa por palavras que formam a str



*/ 

/*

    "" !=  " " 

""   //  string vazia
" " // espaço em branco

*/ 


""   //  string vazia
" " // espaço em branco


const str = 'JavaScript é uma linguagem legal'

const splitar = str.split(' ')

console.log(splitar)

console.log(splitar.length)


//==========================================================//
/*
    usar uma string vazia("") como separador
*/
const string = 'JavaScript é uma linguagem legal'

const splitagem = string.split('',8)
console.log(splitagem)

//===========================================================//
/*
    usar espaço em branco (" ") como separador
*/
const palavras = 'JavaScript é uma linguagem legal'
const splitagens = palavras.split(' ',2)
console.log(splitagens)

//===========================================================//



/*

=> Construtor vazio = não recebe parâmetros e não cria this.propriedade

=> Você só cria o objeto para usar os métodos.

*/ 