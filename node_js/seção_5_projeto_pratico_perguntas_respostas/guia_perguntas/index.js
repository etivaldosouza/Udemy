//1. importando o express
const express = require('express') 

//2. tô copiando o express para minha variavel app
const app = express() 

// 5.Estou dizendo para o express usar o EJS como view engine:
app.set('view engine', 'ejs')

//3. crio uma rota:
// app.get('/', function(req,res){
//     res.send('Seja Bem vindo ao meu site')
// })

// 6. vamos renderizar nosso html:

app.get('/',function(req,res){
    var nome = 'Victor Lima'
    var lang = 'JavaScript'
    res.render('index',{
        nome: nome,
        lang: lang,
        empresa: 'Guia do Programador',
        inscrito: 8000
    }); 
    // o render já identifica o arquivo direto na pasta views sem precisar colocar o caminho completo(views/index) se ele estiver solto na pasta view(caso do index.ejs), porém se o arquivo tiver dentro de uma pasta(caso do home.ejs) ai tem que especificar o caminho
})

//4. rodar minha aplicação:
app.listen(8080,function(){
    console.log('APP RODANDO NA PORTA 8080')
})