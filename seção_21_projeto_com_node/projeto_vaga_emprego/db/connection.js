const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db' // estou dizendo que vou criar o arquivo app.db na pasta db
})

module.exports = sequelize
