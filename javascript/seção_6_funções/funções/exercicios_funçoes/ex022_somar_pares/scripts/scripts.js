/*
    Somando os Números Pares

=>  Escreva uma função chamada sumEvenNumbers que recebe um array de números como argumento.

=>  A função deve calcular e retornar a soma de todos os números pares presentes no array.

=>  Utilize o operador de módulo (%) para determinar se um número é par.

=>  Considere que o array pode conter tanto números inteiros positivos quanto negativos.

=>  Dica: Para verificar se um número é par, você pode usar a expressão numero % 2 === 0, onde % é o operador de módulo que retorna o resto da divisão.

*/ 
arr = [2,3,4,5,8,9]


function sumEvenNumbers(arr){  

    let soma = 0

    for(let i = 0; i < arr.length; i++){

        if(arr[i] % 2 === 0){
            soma = soma + arr[i]
        }       
    }
    
    return soma        
}

let resultado = sumEvenNumbers([2,3,4,5,8,9])
console.log(resultado)