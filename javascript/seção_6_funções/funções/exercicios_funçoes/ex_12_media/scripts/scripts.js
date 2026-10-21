/*
    Média de três números

=> Crie uma função chamada media que recebe 3 números.

=> Retorne a média aritmética deles.

=> Crie uma variável resultado que receba o retorno da função passando os números 6, 8, 10 como argumentos.

=> Mostre o resultado no console.


*/ 

function media(n1,n2,n3){ // n1,n2, n3 são chamado de parâmetros
    return (n1 + n2 + n3)/3
}

let resultado = media(6,8,10) // 6,8,10 são chamados de argumentos

console.log(resultado)
