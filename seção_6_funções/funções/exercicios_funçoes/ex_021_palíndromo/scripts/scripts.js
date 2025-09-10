/*
    Escreva uma função chamada isPalindrome que recebe uma palavra como argumento.

    A função deve verificar se a palavra é um palíndromo.

    Um palíndromo é uma palavra que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.

    A função deve retornar true se a palavra for um palíndromo e false caso contrário.

    Por exemplo:

    isPalindrome('radar') deve retornar true.

    isPalindrome('hello') deve retornar false.

*/ 

function isPalindrome(str){

    
    str = str.toLowerCase() // transforma tudo em minúscula para não dar erro em maiúsculas/minúsculas
    
    let invertida = str.split("").reverse().join("")  // inverte a palavra

    return str === invertida // compara original com invertida

}


console.log(isPalindrome("arara"))
console.log(isPalindrome("carro"))
console.log(isPalindrome("ovo"))
console.log(isPalindrome("ama"))
console.log(isPalindrome("radar"))



/*
    Explicação:

    palavra.toLowerCase() → deixa tudo em minúsculas para evitar problemas (ex: "Ana" ainda será considerado palíndromo).

    split("") → transforma a string em array de letras.

    "arara" → ["a","r","a","r","a"]

    reverse() → inverte a ordem.

    ["a","r","a","r","a"] → ["a","r","a","r","a"] (nesse caso fica igual).

    join("") → junta de volta em uma string.

    ["a","r","a","r","a"] → "arara".

    palavra === invertida → compara se a palavra original é igual à invertida.


*/ 


