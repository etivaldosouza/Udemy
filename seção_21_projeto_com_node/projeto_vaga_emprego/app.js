const express = require("express");
const app = express();
const db = require("./db/connection");
const PORT = 3000;

// rota
app.get("/", (req, res) => {
    res.send("Está funcionando 3");
});

app.listen(PORT, function () {
    console.log(`O express está rodando na porta ${PORT}`);
});

// conexao do banco

db.authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso");
    })
    .catch((err) => {
        console.log("Ocorreu um erro ao conectar", err);
    });

// o nodemon serve para atualizar a aplicação sem precisar reiniciar o servidor;
