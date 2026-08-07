const express = require('express')
const app = express()

const PORT = 3000

app.get('/',(req,res) => {
    res.send('Está funcionando 3')
})

app.listen(PORT, function(){
    console.log((`O express está rodando na porta ${PORT}`))
})


// o nodemon serve para atualizar a aplicação sem precisar reiniciar o servidor;

