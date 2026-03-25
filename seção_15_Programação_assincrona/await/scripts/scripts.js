/*
    Await

=> Nas aync functions, podemos determinar uma instrução await

=> Que vai esperar uma promise ser resolvida para apresentar os resultados
 
*/ 


function somaComDelay(a,b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a+b)
        },3000)
    })
}

async function reSoma(a,b,c,d) {
    let x = somaComDelay(a,b)
    let y = c

    return await x + await y

}
reSoma(5,2,3).then(x => {
    console.log(x)
})

