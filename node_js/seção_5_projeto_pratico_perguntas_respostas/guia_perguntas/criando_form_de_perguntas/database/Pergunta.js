/*
=> o nome deste model c/ 1ª letra maiúscula por convenção e boa pratica.

=> model é uma estrutura de dados que representa nossa tabela. escrito em js.
*/ 

// importando sequelize:
const Sequelize = require('sequelize')

// importando a conexão
const connection = require('./database')


// definindo nosso model:
const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false  // ñ aceita valor nulo
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false    
    }
})

Pergunta.sync({force: false}).then(() => {
    console.log('Tabela criada')  // o console.log é dispensavel
})


module.exports = Pergunta