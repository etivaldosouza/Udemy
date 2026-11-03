//1. importando o express
const express = require("express");

//2. tô copiando o express para minha variavel app
const app = express();

// 5.Estou dizendo para o express usar o EJS como view engine(renderizador de HTML):
app.set("view engine", "ejs");

//3. crio uma rota:
// app.get('/', function(req,res){
//     res.send('Seja Bem vindo ao meu site')
// })

// 6. vamos renderizar nosso html e criar variaveis com ejs  :

app.get("/", function (req, res) {
    var nome = "Etivaldo Souza";
    var lang = "Python";
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        inscrito: 8040,
    });
    // o render já identifica o arquivo direto na pasta views sem precisar colocar o caminho completo(views/index) se ele estiver solto na pasta view(caso do index.ejs), porém se o arquivo tiver dentro de uma pasta(caso do home.ejs) ai tem que especificar o caminho
});

// com parâmetro obrigatorio e com condicional:

app.get("/:matricula/:estado", function (req, res) {
    var matricula = req.params.matricula;
    var estado = req.params.estado;
    var exibirMsg = false;
    res.render("pag02", {
        matricula: matricula,
        estado: estado,
        msg: exibirMsg,
    });
});

app.get("/home", (req, res) => {
    res.render("home", {
        pessoa: {
            nome: "Pedro",
            idade: 25,
        },
    }); // renderiza(exibe a pagina home)
});

// pag03- estrutura condicional
app.get("/pag03", function(req, res) {
    var produtos = [
        { nome: "Doritos", preco: 3.14 },
        { nome: "Coca-Cola", preco: 5 },
        { nome: "Leite", preco: 1.45 },
        {nome: "Carne", preço: 15},
        {nome: "Redbull", preco: 6 },
        {nome: "Nescau", preco: 4}
    ];
    res.render("principal/pag03", {
        produtos: produtos
    });
});

// pagina perfil
app.get("/perfil", (req, res) => {
    var nome = "João";
    var estado = "Maranhão";
    var profissao = "PM";
    res.render("principal/perfil", {
        nome: nome,
        estado: estado,
        idade: 40,
        profissao: profissao,
    });
});

// opcao com parametro obrigatorio
app.get("/perfil/:nome/:estado", (req, res) => {
    var nome = req.params.nome;
    var estado = req.params.estado;
    res.render("principal/perfil", {
        nome: nome,
        estado: estado,
        idade: 34,
        profissao: "Policial",
    });
});

//4. rodar minha aplicação:
app.listen(8080, function () {
    console.log("APP RODANDO NA PORTA 8080");
});
