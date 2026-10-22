// importando o arquivo calculadora.js para este aquivo app.js:

// require indica q estou recebendo

var operacoes = require("./calculadora") // o ./ indica q o arquivo esta na mesma pasta

/*

 eu estou importando a função(soma) que está no modulo calculadora.js e armazenando na variável somaFunção.
 lembrando que eu posso dá qualquer nome para a variável que estou armazenando a funcao do arquivo importado.

*/ 


console.log(operacoes.soma(10,20))

console.log(operacoes.div(20,2))

console.log(operacoes.sub(30,15))

console.log(operacoes.nome)