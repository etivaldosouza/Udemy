
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
verificarNumero(2)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err.message ))


