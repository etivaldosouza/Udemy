/*

=>    Escreva uma função chamada reverseString que receba uma string como argumento

=>   A função deve inverter a ordem dos caracteres na string

=>   A função deve retornar a string invertida


*/ 

// usando for de tras p/ frente:

n - 0
e - 1
t - 2
o - 3



function reverseString(str){

    let invertida = "" //*

    for(let i = str.length - 1; i >= 0; i--){
        invertida = invertida + str[i]   //* alterando o valor da variável(só posso com let)
    }
    return invertida
}

console.log(reverseString("neto"))



// outra maneira: 



function reverseString(str){

    let invertida = "" //*
    
    for(let i = str.length - 1; i >= 0; i--){
        invertida = invertida + str[i]   //* alterando o valor da variável(só posso com let)
    }
    console.log(invertida)
}

(reverseString("neto"))



/*
    relembrando:

=> usar let permite alterar o valor da variável, mas impede que ela seja redeclarada e usar const impede tanto a    alteração como a redeclaração do valor

ex: 

pode:

let i = 5

i = 9

não pode:

let i = 5

let i = 9 => estou redeclarando e não pode

=======================================

com const não pode nem alterar nem redeclarar

const i = 5
i = 9 vai da erro

=======================================
const i = 5

const i = 9 vai dá erro
*/ 