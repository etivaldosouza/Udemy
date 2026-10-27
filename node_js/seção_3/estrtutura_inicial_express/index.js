/*
    Express

=> É uma superbiblioteca que ajuda a fazer uma determinada tarefa. Ajuda 
a fazer uma aplicação no node.js

npm(node package maneger) : gerenciador de pacotes do node
serve para criar projetos node e baixar bibliotecas diversas.
o npm já vem com o node

passos para criar o projeto:

1) npm -v(checa se o nmp está instalado na maquina) 

2) npm init(inicializa o projeto criando o arquivo de config package.json)

3) npm instal express --save(instala o express)

4) cria o arquio index.js(nomenclatura convencional), caso ele ñ tenha sido criado no passo anterior

5) Cria as rotas(get,post, delet etc)

6) inicia o servidor(app.listen),indicar a porta, e criar uma função q será executada ao iniciar o servidor e recebe parâmetro para identificar algum erro ao iniciar o servidor.


Obs: ñ esquecer da instal do nodemon -g que faz com que nao precise ficar reiniciando o servidor toda vez q o codigo é alterado -> npm install nodemon -g

*/ 

const express = require('express')  // importando o express

const app = express()   // carrega todo o framework(biblioteca) p/ a variavel app ) ou seja, inicializa o express


// indicando rotas:

app.get('/',function(req,res){ 
    res.send('<h1>Seja Bem vindo ao Nosso Site</h1>')
})

app.get('/blog',function(req,res){
    res.send('Bem vindo ao meu blog: www.guiadoprogramador.com.br')
})

app.get('/canal/youtube',function(req,res){
    res.send('Bem vindo ao nosso canal no Youtube!!')
})

app.get('/olá',function(req,res){
    res.send('Olá Mundo!')
})


// inicia o servidor com uma porta e uma função que é executada sempre q o servidor é iniciado

app.listen(4000,function(erro){ 
    if(erro){
        console.log('Ocorreu um Erro!')
    }else{
        console.log('Servidor iniciado com sucesso')
    }
})

/*
    parâmetros:
    
-> Forma de passar valores dinâmicos a sua rota

*/
 


/*

se não for indicado as rotas, ao abrir o navegador aparecerá uma msg de 'Cannot GET /'
pois não foi indicado as rotas. por issoa msg acima

a rota tem q ser criada antes de chamar o servidor e ela tem duas coisas:

1. qual a url que ela aponta
2. o que ela faz

*/
