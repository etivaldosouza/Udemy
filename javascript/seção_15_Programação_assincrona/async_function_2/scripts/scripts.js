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

saudacao('Pedro').then((valor) => {
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

function(){ essa função anônima seria um callback
    console.log('temos aqui a função setTim e outra função como parâmetro')
}


relembrando: 

=>  a função setTimeout é uma função assyncrona e ela recebe dois parâmetros: um é uma função anônima e o outro é o tempo em que ela vai demorar para ser executada
*/ 

async function somar(a,b){

    return a + b
}

setTimeout(function(){
    console.log('Eu sou uma função calback')
},3000)

somar(3,4).then(valor => {
    console.log(valor)   // 7
    return valor + 10    // 7+10 armazenado na memória
}).then(valor =>{
    console.log(valor)
})



console.log('Teste1')
console.log('Teste2')

console.log(somar(2,4))