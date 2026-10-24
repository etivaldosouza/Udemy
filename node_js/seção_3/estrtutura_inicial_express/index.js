/*
    Express

=> É uma superbiblioteca que ajuda a fazer ima determinada tarefa. Ajuda 
a fazer uma aplicação no node.js

npm(node package maneger) : gerenciador de pacotes do node
serve para criar projetos node e baixar bibliotecas diversas.
o npm já vem com o node

passos para criar o projeto:

1) npm -v(checa se o nmp está instalado na maquina) 

2) npm init(inicializa o projeto criando o arquivo de config package.json)

3) npm instal express --save(instala o express)

4) cria o arquio index.js(nomenclatura convencional), caso ele ñ tenha sido criado no passo anterior

5) inicia o servidor(app.listen),indicar a porta, e criar uma função q será executada ao iniciar o servidor e recebe parâmetro para identificar algum erro ao iniciar o servidor.

6) 

*/ 

const express = require('express')  // importando o express

const app = express()   // carrega todo o framework(biblioteca) p/ a variavel app ) ou seja, inicializa o express


// cria rotas(aponta para um determinado caminho):

app.get('/',function(req,res){
    res.send('Bem Vindo ao guia do programador!!')    
})

app.get('/blog',function(req,res){
    res.send('Bem vindo ao meu blog')
})

app.get('/youtube',function(req,res){
    res.send('bem vindo ao meu canal')
})


app.listen(4000,function(erro){ // inicia o servidor com uma função que é executada sempre q o servidor é iniciado
    if(erro){
        console.log('Ocorreu um Erro!')
    }else{
        console.log('Servidor iniciado com sucesso')
    }
})


