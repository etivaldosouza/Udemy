/*
    Pulando uma execução do loop: (continue)


=> dependendo da nossa lógica podemos pular o resto da execução do loop

=> para isso utilizamos a palavra reservada continue

*/ 


let x = 0

while(x < 11){
    x = x + 1
    if(x % 2 == 0){
        continue
    }
    console.log(x)
    x = x + 1
}

for(let i = 10; i > 0; i = i - 1){

    if(i % 2 == 0){ // se for par
        console.log('caiu no continue') //Mostra mensagem se for par
        continue    //ñ segue o resto do código abaixo e vai para a próxima repetição(volta pro loop)
    }
    console.log(i) // so vai imprimir o i caso a condição dentro do loop seja atendida(ser par)
}


for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}


/*
    O que acontece aqui:

    O laço vai de 1 até 5.

    Quando i for 3, o continue pula o console.log(i).

    Resultado no console:


*/


// imprimindo apenas os numeros pares

for(let i = 0; i < 10; i = i + 1){
    if(i % 2 != 0){
        continue     // se o i  satisfazer a condição, continue faz com que nao siga para o codigo abaixo
    }                // quando ñ satisfaz a condição, o código segue para linha de baixo
    console.log(i)
    
}  