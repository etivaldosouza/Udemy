/*
                while

=> Estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira.

=> precisamos realmente definir um fim para o loop, caso contrário, ele se tornará um loop infinito.
    => Exemplo: while (condição) { ... }
    => Exemplo: while (i < 10) { ... }

*/ 

let x = 10

while (x > 0) {
    console.log(`O valor de x é: ${x}`)
x--                    // Decrementa x em 1 a cada iteração(mesma coisa que x = x-1) definindo assim um fim para o loop.
}
console.log('Acabou!')


let i = 0
while (i <= 10) {
    console.log(`O valor de i é: ${i}`)
    i++                  // Incrementa i em 1 a cada iteração(mesma coisa que i = i+1) definindo assim um fim para o loop.
}
console.log('Fim!')