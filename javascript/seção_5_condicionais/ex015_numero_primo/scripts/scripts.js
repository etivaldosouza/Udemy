/*
    verifique se o número é primo!

    - número primo é um número natural maior que 1 que é divisivel por um e por ele mesmo,ou seja o número para ser primo tem que ter apenas 2 divisores o 1 e ele mesmo.

*/ 

// na estrutura while e for tem q ter o incrementro/decremento p/ ñ cair no loop infinito


let num = 4 // nr que será testado se primo ou ñ
let divisoes = 0 // contador dos divisores

for(let i = 1; i <= num; i++){ 

    if(num % i == 0){
        divisoes++                    
    }  
}

if(divisoes == 2){
    console.log(`o numero ${num} é primo`)
    
}else{
    console.log(`o número ${num} ñ é primo`) // tem mais de 2 divisores
}

// botei o i p/ começar no 1 pq começando com 0 ñ daria certo pq no primeiro caso cairia em 0/0 => e ñ existe divisão por zero

// em seguida o codigo continua p/ saber se é primo ou nao



