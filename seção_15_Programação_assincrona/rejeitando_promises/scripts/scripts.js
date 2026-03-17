/*
    Rejeitando Promises

=> Além do resolve, há o método reject

=> Que é quando determinada lógica não satisfaz nosso programa então podemos ir para outra com o rejec, em vez do resolve;

=> resolve e rejecte terminam a Promise, ou seja não podemos chamar mais o then, por exemplo

*/ 

function verificarAlgo(num) {
    return new Promise((resolve, reject)=>{
        if(num === 2){
            resolve(console.log('O número é 2'))
        }else{
            reject(new Error('Falhou'))
        }
    })
}

verificarAlgo(3)
verificarAlgo(4)
verificarAlgo(2)



