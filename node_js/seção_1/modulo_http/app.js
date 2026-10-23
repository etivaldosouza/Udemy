// criando um servidor http:

/*
    obs: no terminal para eu conectar meu servidor eu uso o comando node app.js
    para encerrar o servidor eu uso o comando ctrl c


*/ 

var http = require('http') //(aqui estou importando o modulo http do node)

http.createServer(function(requisicao,resposta){
    resposta.end('<h1>Bem vindo ao meu site!</h1><h4>guiadoprogramador.com.br</h4>')
}).listen(3000) // comando que cria o servidor.(pode ser qualquer porta)

console.log('Meu Servidor está rodando na porta 3000')