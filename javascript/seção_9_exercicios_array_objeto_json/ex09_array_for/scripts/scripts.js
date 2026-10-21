/*

=>    Crie um array a partir de uma frase

=>    imprima cada palavra do array no console por meio de um for;

*/ 


let frase = 'Olá Etivaldo! Seja Bem vindo!!'

let farr = frase.split() // coloca toda a frase em um array

console.log(farr)


//==================================================//


let frase = 'Olá Etivaldo! Seja Bem vindo!!'

let farr = frase.split(' ') // cria array de palavras
console.log(farr)

//imprimindo cada palavra do array no console por meio de um for;


for(let i = 0; i < farr.length; i++){
    console.log(farr[i])
}


//imprimindo cada palavra do array no console por meio de um map;


let frase = 'Olá Etivaldo! Seja Bem vindo!!'

let farr = frase.split(' ') // cria array de palavras

let palavras = farr.map(palavra => {
    console.log(palavra)
})