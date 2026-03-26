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




let prom1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(15)
    },5000)   
})

let prom2 = Promise.resolve(12)

let prom3 = new Promise((resolve,reject) => {
    resolve(20)
})

let prom4 = 100
console.log(prom4)

Promise.all([prom3,prom1,prom2]).then(function(valor){
    console.log(valor)
})

//vai executar sempre na ordem que vc determinar no array