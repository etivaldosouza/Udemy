/*
    Armazene em variáveis cada um dos tipos de dados vistos:

    String,Number e Boolean

 */ 

let txt = 'João'
console.log(typeof(txt))

/*
    ''special Number'':

    temos tb os tipos de dados que são Number mas que não são numeros:

    NaN, Infinity, -Infinity
    
    NaN => somar algo q ñ é numero com um nr ou trata algo como numero mas ñ é nr

    Infinity e -Infinity => operação aritmetica errada

*/

let num = NaN 
console.log(typeof(num))


let inft = Infinity  
console.log(typeof(inft))

let inftNegativo = -Infinity
console.log(typeof(inftNegativo))


let verd = 30 > 20
console.log(typeof(verd))

/*

    valores que por padrão são considerados false:
    ----------------------------------------------
    null , underfined, ' '(string vazia), false, 0.

*/

let falso = '' || false // regra ou : só é falso se todos forem falso e retorna o ultimo falso que no caso é o false 

console.log(falso)
console.log(typeof(falso))

let falso =  ''  || false && null    //regra do e: só é verdadeiro se todos forem verdadeiros havendo um falso retorna o 1º que for falso. havendo um && o js pula logo para ele e analisa desconsiderando o outro operdor logico  ||(analisou o false && null).

console.log(falso)
console.log(typeof(falso))


let menor = console.log(20 < 30)