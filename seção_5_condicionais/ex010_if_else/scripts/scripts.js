/*
- armazene a velocidade de um carro em uma variável, com um número que desejar;

- faça uma estrutura if/else que verifica se ele está acima da velocidade

- 80 é a velocidade máxima permitida

- se estiver acima ou abaixo exiba mensagens com console.log

*/ 

let velocidade = 81

if(velocidade > 80){
    console.log(`sua velocidade foi ${velocidade} km/h, você ultrapassou o limite maximo de velocidade e será multado`)
}else{
    console.log(`sua velocidade foi ${velocidade} km/h você está dentro do limite máximo de veloc permitido`)
}