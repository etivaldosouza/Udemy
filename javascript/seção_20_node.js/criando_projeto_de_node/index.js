/*
    Iniciando um Projeto

=> Na última aula vimos que o node reclamou da falta do package.json

=> O certo sempre é ter um arquivo desse ao iniciar um novo projeto;

=> Podemos criar a partir do template, utilizando o comando: npm init;

=> Aí teremos um projeto com package.json;

=> Este arquivo serve para configurações e salva nossas dependencias;

=> package.json(arquivo de configuração do projeto)

*/ 


let express = require('express')

let app = express()

// criando uma rota de exemplo
app.get('/',function(req,res){
    res.send('Primeira rota com Express')
})

app.get('/teste',function(req,res){
    res.send('Testando Rota')
})

app.get('/teste2',function(req,res){
    res.send('Testando mais uma Rota')
})


app.listen(3000,function(){
    console.log('A aplicação está funcionando na porta 3000')
})