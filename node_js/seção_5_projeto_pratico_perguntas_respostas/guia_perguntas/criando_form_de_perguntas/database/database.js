// conexão com sequelize:

const Sequelize = require('sequelize') // importando modulo sequelize

// conectando ao nosso banco de dados criado lá no mysqlWorkbanch
const connection = new Sequelize('guiaperguntas','root','neto83',{
    host: 'localhost',   // local onde está rodando meu banco
    dialect: 'mysql'    //tipo de bco que quero me conectar
})

// exportar nossa conexção p/ utilizar em outros arquivos

module.exports = connection