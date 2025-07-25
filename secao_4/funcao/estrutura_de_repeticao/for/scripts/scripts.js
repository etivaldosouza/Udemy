/*
                estrutura de repetição for

=> for (let i = 0; i < 5; i++) {
        console.log(i);
    }
=> semelhante ao while, mas com a diferença que o for já inicia a variável de controle, define a condição de parada e incrementa a variável de controle.

*/ 

for (let i = 0; i < 5; i++) {   
    console.log(i);
}

for(let i = 0; i < 100; i = i + 3){
    console.log(`a soma de i com 2 é = ${i + 2}`)
}