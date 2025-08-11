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

/*
O JavaScript cria a variável i e define seu valor como 0.

Isso acontece uma única vez, no início do laço.

Condição → i < 100
Verifica se i ainda é menor que 100.

Se verdadeiro, executa o bloco dentro do { }.

Se falso, o laço termina.

Bloco de código:

console.log(`a soma de i com 2 é = ${i + 2}`)

Isso será executado toda vez que a condição for verdadeira.

Incremento → i = i + 3
Depois de executar o bloco, o valor de i aumenta 3 unidades.

Depois do incremento, volta para a verificação da condição (passo 2). saber se o i é menor q 100

*/ 