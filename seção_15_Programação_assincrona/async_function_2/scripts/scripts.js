async function multiplica(a, b) {
    return a * b
}

multiplica(2,3).then((valor) =>{
    console.log(valor)
})



//================================================//

async function saudacao(params) {
    return `olá ${params}`
}

saudacao('Etivaldo').then(function(valor){
    console.log(valor)
})

saudacao('Pedro').then(function(valor){
    console.log(valor)
})

setTimeout((msg) => {
    console.log('Está função é uma função assincrona e é executada 5s depois')
},5000)

console.log('Teste1')

console.log('Teste2')


/*
funcao sem aerow function
setTimeout(function(){
    console.log('temos aqui a função setTim e outra função como parâmetro')
},3000)

*/ 