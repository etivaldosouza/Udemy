/*
    Módulo HTTP

=> Outro módulo muito utilizado,para fazer comunicação via HTTP

=> O módulo já vem com o node

=> Pode criar um servidor que serve páginas web para nós

*/ 


const{createServer} = require('http')

let server = createServer((request,response) =>{
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write(`
        <h1>Hello world!</h1>
        <p>Primeira Página com node.js</p>`)
    response.end()
})

server.listen(8000)

console.log('Ouvindo a porta 8000')