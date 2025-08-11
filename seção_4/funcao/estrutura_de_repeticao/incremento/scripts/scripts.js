/*
    Incremento:

=> Podemos Incrementar uma variável de forma fácio: 
    ex: x += 1 ou x++ ou x= x+1

*/

for(let numero = 0; numero < 10; numero += 1){
    if(numero % 2 == 0)
        continue   // ñ vai imprimir os numeros pares continua testanto a condição, ñ avanca p/ prox linha do codigo
    console.log(`o número é igual a ${numero}`)
}




let numero = 5

while(numero < 50){
    console.log(numero)
    numero += 5
}

for(let numero = 5; numero < 50; numero += 5){
    console.log(numero)
}

for(let numero = 50; numero >= 0; numero -= 10){
    if(numero === 40){
        continue // ñ irá para a linha seguinte. ou seja, ñ irá imprimir o 40
    }
    console.log(numero)
}