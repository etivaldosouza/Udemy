/*
    - preencha a variável sem pares apenas com números ímpares
    - utilize uma estrutura de loop para percorrer o array arr
    - verifique se o número é ímpar e coloque no array semPares
    - no final, exiba o array semPares com console.log

*/ 

const arr = [1,2,3,4,5,6,7,8]
const semPares = []

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){       
        semPares.push(arr[i])  //metodo push adiciona o elemento no fim do array
        
    }    
}
console.log(semPares)

