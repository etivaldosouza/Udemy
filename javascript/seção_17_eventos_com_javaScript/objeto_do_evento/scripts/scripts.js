/*
=> Quando criamos eventos, temos a opção de utilizar um argumento opcional, que é chamado de objeto do evento;

=> Ele contém propriedades que podem ser utilizadas a nosso favor;

=> O objeto(evento,argumento) é criado pelo JavaScript automaticamente;

*/ 


let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')


// podemos criar atraves de um argumento em uma função externa,separada;

function msg(e){
    console.log(e)  // vai mostrar os objetos do evento
}

btn1.addEventListener('click',msg)



//==============maneira 2: utilizando na func anônima =====================

btn2.addEventListener('click',function(event){
    console.log(event)   // vai mostrar os objetos do evento
})
