/*
    Encontrar o maior número em um array

=>  Crie uma função chamada findMaxNumber que recebe como parâmetro um array de números.

=>  A função deve retornar o maior número presente no array.

*/ 



function findMaxNumber(arr) {
   return Math.max(...arr)
}

console.log(findMaxNumber([2,5,10,15]))




/*

    Explicação:

O parâmetro arr é o array de números.

O operador ... (spread) “espalha” os valores do array dentro da função Math.max().

Math.max() retorna o maior valor entre os números recebidos.

*/ 