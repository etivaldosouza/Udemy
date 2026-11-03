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
    var nome = 'Etivaldo Souza'
    var lang = 'Python'
    res.render('index',{
        nome: nome,
        lang: lang,
        empresa: 'Guia do Programador',
        inscrito: 8040
    }); 
    // o render já identifica o arquivo direto na pasta views sem precisar colocar o caminho completo(views/index) se ele estiver solto na pasta view(caso do index.ejs), porém se o arquivo tiver dentro de uma pasta(caso do home.ejs) ai tem que especificar o caminho
})

app.get('/home',(req,res) => {
    res.render('home')
})


app.get('/perfil',(req,res) => {
    nome = 'João'
    estado = 'Maranhão'
    profissao = 'PM'
    res.render('principal/perfil',{
        nome:nome,
        estado: estado,
        idade: 40,
        profissao: profissao
    })
})

// opcao com parametro obrigatorio
app.get('/perfil/:nome/:estado',(req,res) =>{
    var nome = req.params.nome
    var estado = req.params.estado
    res.render('principal/perfil',{
        nome: nome,
        estado: estado,
        idade: 34,
        profissao: 'Policial'
    })
})




//4. rodar minha aplicação:
app.listen(8080,function(){
    console.log('APP RODANDO NA PORTA 8080')
})