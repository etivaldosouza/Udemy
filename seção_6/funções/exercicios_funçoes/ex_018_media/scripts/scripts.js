/*

=>    escreve uma função chamada calculateAverage que recebe um array de números como arumento

=>    A função deve calcular a média dos números no array

=>    a média é calculada somando todos os números e dividindo pelo total de números no array

=>    a função deve retornar o valor da média calculada

*/ 

function calculateAverage (arr){
     // somando todos os números do array
    
    soma = 0  // acumulador começa em zero

    for(let i = 0; i < arr.length; i++){
        soma =  soma + arr[i] // a cada volta ele faz a soma com o elemento seguinte do array
    }
    
    let media = soma/arr.length 
    return media                                
}


let resultado = calculateAverage([2,4,6])

console.log(resultado)

/*
    O que acontece em cada passo:

=> soma começa em 0.

=> Na primeira volta(primeiro elemento i-0 = 2), pega o 2 e soma → 0 + 2 = 2.

=> Na segunda volta(segundo elemento i-1 = 4 ), soma com o próximo valor → 2 + 4 = 6.

=> Na terceira volta,(terceiro elemento i-3 = 6) soma com o último → 6 + 6 = 12.

=> No fim, o resultado é 12.


*/ 







let arr = [2, 4, 6];

for (let i = 0; i < arr.length; i++) {
    console.log(`o elemento ${i} - ${arr[i]}`)
}

