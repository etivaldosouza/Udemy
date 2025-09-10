/*
    Escreva um loop for ou while que exiba qual número é
    par e qual é impar;

    o contador deve iniciar em 0 e ir até 50
*/ 

for(let i = 0; i <= 50; i++){
    if(i % 2 == 0){
    console.log(`o número ${i} é par`)
    }else{
        console.log(`o número ${i} é ímpar`)
    }
}

// usando while:

let i = 0

while(i <= 50){

    if(i % 2 == 0){
        console.log(`o número ${i} é par`)
        
    }else{
        console.log(`o número ${i} é ímpar`)
    }
    
    i++
}
