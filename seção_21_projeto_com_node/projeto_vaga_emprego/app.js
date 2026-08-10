const express = require("express");
const app = express();
const db = require("./db/connection");
const PORT = 3000;
const bodyParsers = require('body-parser')

// body parsers
app.use(bodyParsers.json())
app.use(bodyParsers.urlencoded({ extended: false }));

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
