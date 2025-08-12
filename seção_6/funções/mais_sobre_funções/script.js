const soma = function(a,b){
    return a + b   
}

const total = soma(3,5)

console.log(total) 


// outra maneira:

const soma = function(a,b){
    return a + b   
}

console.log(soma(4,5))

//==========================================//

const multiplica = function (x,y){
    return x * y
}

console.log(multiplica(4,2))


//==============================================//


const saudacao = function(nome) {
    if(nome == 'Etivaldo'){
        return 'olá Etivaldo'
    }else{
        return `olá ${nome}`
    }
}

const qra = console.log(saudacao('Etivaldo'))