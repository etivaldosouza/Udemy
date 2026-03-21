/*
    Async functions

=> Podemos criar funções assíncronas com a palavra reservada async

=> Elas retornam uma Promise

=> Se retornar algo, a promessa é resolvida, se der alguma exception a promessa é rejeitada;
  
*/ 



async function somar(a,b) {
    return a + b
}

somar(3,4).then((valor) => {
    console.log(valor)
})

console.log('Teste')