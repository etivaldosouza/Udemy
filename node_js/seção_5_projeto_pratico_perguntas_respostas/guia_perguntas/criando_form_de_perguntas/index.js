const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');

// body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//definindo o uso de arquivos estáticos
app.use(express.static('public'))


// rotas
app.get('/',function(req,res){

    res.render('index')
    
})

app.get('/perguntar',(req,res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta',function(req,res){
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send(`Formulario recebido! <br>Titulo: ${titulo}<br> Descrição: ${descricao}`)
})

app.listen(8080,()=>{console.log("App rodando na porta 8080!")});