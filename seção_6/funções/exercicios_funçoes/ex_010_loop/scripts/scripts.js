/*
=> Escreva uma função que recebe um número, e o decrementa de 1 em 1 com loop

=> Além disso imprima somente os números pares no console


*/

function pares(num){
    for(let i = num; i >= 0; i--)
        if(i % 2 === 0)
            console.log(i)
}

pares(11)
pares(25)