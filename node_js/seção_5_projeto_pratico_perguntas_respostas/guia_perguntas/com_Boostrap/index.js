const express = require("express");
const app = express();

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');

//definindo o uso de arquivos estáticos
app.use(express.static('public'))


app.get('/',function(req,res){

    res.render('index')
    
})

// com parametros e com estrutura condicional e de repeticao 
app.get("/",(req, res) => {
n
    res.render("index")
})



app.listen(8080,()=>{console.log("App rodando na porta 8080!")});