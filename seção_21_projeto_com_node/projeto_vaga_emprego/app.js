const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const db = require("./db/connection");
const PORT = 3000;
const bodyParsers = require("body-parser");
const Job = require("./models/Job");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { ExpressHandlebars } = require("express-handlebars");
const { where } = require("sequelize");
const { query } = require("./routes/jobs");
const sequelize = require("./db/connection");

// body parsers
app.use(bodyParsers.json());
app.use(bodyParsers.urlencoded({ extended: false }));

// handle bars
app.set("views", path.join(__dirname, "views")); //onde vai ficar os tamplat do projeto
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" })); //arquivo principal de layout
app.set("view engine", "handlebars"); // qual biblioteca vai utilizar a views

// static folder
app.use(express.static(path.join(__dirname, "public"))); // qual é a pasta de arquivos estaticos

// routes
app.get("/", (req, res) => {
    let search = req.query.job;
    console.log("BUSCA:", search);
    let query = "%"${search}%`; //PH -> PHP, Word -> Wordpress, press -> Wordpress
    if (!search) {
        Job.findAll({ order: [["createdAt", "DESC"]] })
            .then((jobs) => {
                res.render("index", {
                    jobs,
                    search,
                });
            })
            .catch((err) => console.log(err));
    } else {
        Job.findAll({
            where: { title: { [Op.like]: query } },
            order: [["createdAt", "DESC"]],
        })
            .then((jobs) => {
                res.render("index", {
                    jobs,
                    search,
                });
            })
            .catch((err) => console.log(err));
    }
});

// jobs routes

app.use("/jobs", require("./routes/jobs"));

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

// o nodemon serve para atualizar a aplicação sem precisar reiniciar o servidor;
