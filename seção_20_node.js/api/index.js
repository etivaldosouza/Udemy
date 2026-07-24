/*
    O que é uma API?

=> Application Programming Interface

=> Uma maneira de se comunicar via HTTP a um servidor e fazer operações como: visualizar,deletar,criar e atualizar dados;

=> Grandes aplicações como Facebook e Instagram utilizam APis

=> Grande parte dos softwares desenvolvidos em Node.js tem uma API

=> E utilizam um framework chamado Express para isso;

*/ 


import express, { response } from 'express'
import { request } from 'node:http'

const app = express()

app.get('/usuarios',(request,response) =>{
    response.send('Ok Deu Bom!')
})

app.listen(3000)

