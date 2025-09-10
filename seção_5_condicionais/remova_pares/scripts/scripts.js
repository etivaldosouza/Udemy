/*
    - preencha a variável sem pares apenas com números ímpares
    - utilize uma estrutura de loop para percorrer o array arr
    - verifique se o número é ímpar e coloque no array semPares
    - no final, exiba o array semPares com console.log

*/ 

const arr = [1,2,3,4,5,6,7,8]
const semPares = []

for(let i = 0; i < arr.length; i++){  // O laço percorre todo o array arr// arr.length é 8, então o loop vai de i = 0 até i = 7.
    if(arr[i] % 2 != 0){  // arr[i] % 2 calcula o resto da divisão por 2. se for != de 0 é impar     
        semPares.push(arr[i])  //metodo push adiciona o elemento no fim do array
        
    }    
}
console.log(semPares)





