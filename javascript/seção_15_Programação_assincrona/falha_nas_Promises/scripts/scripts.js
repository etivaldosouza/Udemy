/*
    Falhas nas Primises

=>  Uma Promise pode falhar, podemos reter esse erro com um método chamado catch

=> Com ele podemos exibir o erro no console, por exemplo, e fazer o debug no código

*/ 


let promiseErrada = Promise.resolve(new Error('Algo deu errado'))

promiseErrada
    .then((valor) => console.log(valor))
    .catch(reason => console.log('Erro:' + reason))


//=====================================================================//

let p = Promise.resolve(new Error('não deu certo!!'))

console.log('lallalal')

p
.then(valor => console.log(valor))
.catch(reason => console.log('Falhou' + reason))

