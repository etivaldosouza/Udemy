/*
    Await

=> Nas aync functions, podemos determinar uma instrução await

=> Que vai esperar uma promise ser resolvida para apresentar os resultados
 
*/ 


function somaComDelay(a,b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a + b)
        },3000)
    })
}