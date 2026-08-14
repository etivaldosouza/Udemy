const express = require("express");
const exphbs = require('express-handlebars')
const app = express();
const path = require('path')
const db = require("./db/connection");
const PORT = 3000;
const bodyParsers = require('body-parser');
const { ExpressHandlebars } = require("express-handlebars");

// body parsers
app.use(bodyParsers.json())
app.use(bodyParsers.urlencoded({ extended: false }));


// handle bars
app.set('views',path.join(__dirname,'views')) //onde vai ficar os tamplat do projeto
app.engine('handlebars', exphbs({defaultLayout:'main'})) //arquivo principal de layout
app.set('view engine', 'handlebars') // qual biblioteca vai utilizar a views


// static folder
app.use(express.static(path.join(__dirname,'public'))) // qual é a pasta de arquivos estaticos


// routes
app.get("/", (req, res) => {
    res.send("Está funcionando 3");
});

// jobs routes

app.use('/jobs',require('./routes/jobs'))


// conexao do banco

db.authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso");
    })
    .catch((err) => {
        console.log("Ocorreu um erro ao conectar", err);
    });

    
// servidor

app.listen(PORT, function () {
    console.log(`O express está rodando na porta ${PORT}`);
});

// body parser




// o nodemon serve para atualizar a aplicação sem precisar reiniciar o servidor;
