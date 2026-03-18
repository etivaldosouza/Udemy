/*
    Resolvendo várias Promises

=> Com o método all, podemos resolver várias promessas de uma vez

=> ou seja passamos elas por array e quando a última for resolvida, receberemos a resposta


*/ 

const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(100)
    },5000)
})

const p2 = Promise.resolve(5)

const p3 = new Promise((resolve,reject) => {
    resolve(10)
})

Promise.all([p1,p2,p3]).then((valor) => console.log(valor))