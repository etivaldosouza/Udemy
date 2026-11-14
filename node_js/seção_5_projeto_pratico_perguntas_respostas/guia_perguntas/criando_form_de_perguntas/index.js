const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database')  // caminho completo pois ñ o arquivo ñ está na mesma pasta
const Pergunta = require('./database/Pergunta')

// testando database
connection.authenticate().then(() => {
    console.log('Conexão feita com o banco de dados!')
}).catch((msgErro) => {
    console.log(msgErro)
})

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');

// body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//definindo o uso de arquivos estáticos
app.use(express.static('public'))


// rotas
app.get('/',function(req,res){
    Pergunta.findAll({raw:true}).then(perguntas => { // equivalente ao select * from perguntas
        res.render('index',{
            perguntas: perguntas
        })
    })         
})

app.get('/perguntar',(req,res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta',function(req,res){

    var titulo = req.body.titulo
    var descricao = req.body.descricao
    //res.send(`Formulario recebido! <br>Titulo: ${titulo}<br> Descrição: ${descricao}`)

    Pergunta.create({  // equivalente ao insert into
        titulo:titulo,
        descricao: descricao
    }).then(() =>{ // aqui eu estou redirecionando o usuario p/ pag. principal após enviar a pergunta
        res.redirect('/') 
    })
})

app.listen(8080,()=>{console.log("App rodando na porta 8080!")});