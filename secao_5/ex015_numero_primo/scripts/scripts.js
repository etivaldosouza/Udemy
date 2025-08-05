/*
    verifique se o número é primo!

    - número primo, é um número natural maior que 1 que é divisivel por um e por ele mesmo

*/ 

// na estrutura while e for tem q ter o incrementro/decremento p/ ñ cair no loop infinito


let num = 3 // nr que sera testado se primo ou ñ
let divisoes = 0 // contador de divisoes


for(let i = 1; i <= num; i++){
    if(num % i == 0){
        divisoes++
    } 
}

if(divisoes == 2){
    console.log(`o numero é primo`)
}else{
    console.log(`o número ñ é primo`)
}

