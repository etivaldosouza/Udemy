/*
    Rejeitando Promises

=> Além do resolve, há o método reject

=> Que é quando determinada lógica não satisfaz nosso programa então podemos ir para outra com o rejec, em vez do resolve;

=> resolve e rejecte terminam a Promise, ou seja não podemos chamar mais o then, por exemplo

*/ 



function verificarNumero(num){
    return new Promise((resolve, reject) => {           //usando aerowfunction
        if(num === 2){
            resolve(console.log('O número é 2'))
        }else{
            reject(new Error("Falhou!!"))
        }
    })
}

verificarNumero(3)

verificarNumero(2)

//===========================================================//
//  maneira 2 sem aerowfuncion

function verificarNumero(num) {
    return new Promise(function(resolve,reject){
        if(num === 2){
            resolve(console.log('O número é 2'))
        }else{
            reject(new Error('Falhou'))
        }
    })
}

verificarNumero(4)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err.message ))
verificarNumero(10)
verificarNumero(2)

/*
Explicação detalhada

1. Declaração da função

function verificarNumero(num){

=>  Você cria uma função chamada verificarNumero

=>  Ela recebe um parâmetro num


2. Retornando uma Promise

return new Promise((resolve, reject) => {      

ou : 

new Promise(function(resolve,reject){

}) 

Aqui você cria e retorna uma Promise

Essa Promise recebe uma função com dois parâmetros:

resolve → quando dá certo

reject → quando dá erro


3. Condição

if(num === 2){

Verifica se o valor passado é exatamente 2

4. Caso verdadeiro

resolve(console.log('O número é 2'))

Aqui tem um detalhe MUITO importante ⚠️

Primeiro o console.log é executado → imprime:

O número é 2

Depois o resolve() é chamado com o retorno do console.log

👉 Mas console.log retorna undefined

Então isso equivale a:

console.log('O número é 2')
resolve(undefined)


5. Caso falso
reject(new Error("Falhou!!"))

Cria um erro com:

new Error("Falhou!!")

E rejeita a Promise com esse erro

6. Fechamento da Promise e função

})
}
*/ 