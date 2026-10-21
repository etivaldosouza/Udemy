/*
    slice()

=> Retorna um array a partir de outro array
    
=> Retorna um novo array contendo os elementos entre os índices inicio inclusive(inclui o primeiro indice) e fim exclusive(exclui o ulimo indice)

*/ 

const arr = [12,17,60,319]


console.log(arr.slice(0,2)) // gera um array com elemento do indice 0 ate o indice 1(o 2 ñ entra)

//================================================================//

let numeros = [0,1,2,3,4,5]

console.log(numeros.slice(2,3)) // pega o elemento do índice 2 (que é o 2) até o de indice 2(3-1)

console.log(numeros.slice(3)) // vai do 3 até o final incluindo o ultimo

//=================================================================//

let numeros = [0,1,2,3,4,5,6,7,8,9]

console.log(numeros.slice(0,5)) // pega os elementos do indice 0 até o indice 4

console.log(numeros.slice(4,5)) // pega apenas o elemento de indice 4

console.log(numeros.slice(4,6)) // pega os elemtos do indice 4 e 5

console.log(numeros.slice(5)) // pega os elementos do indice 5 até o ultimo

console.log(numeros.slice(-2)) // pega de trás p; frente

console.log(numeros.slice(-5,-1)) // pega o elemento de indice 1 até o de indice 4 da direita p/ esquerda

console.log(numeros.slice(3,-2)) // pega o elemento do indice 3 tirando os dois ultimos

console.log(numeros.slice(0,-5)) 