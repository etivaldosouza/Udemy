/*
    Função CallBack

=> são funções que são passadas como parâmetro em outra função e executada dentro dela

*/ 


function somaCallback(a,b,fnCallback){
    return fnCallback (a + b)
}

console.log(somaCallback(10,3,function(total){
    return total * 2
}))


//==================================================//


function soma (a,b,CallBack){
    return CallBack(a + b)
}

var resultado = soma(10,3,function(total){
    return total * 3
})

console.log(resultado)


//================ outra maneira ==========================//

function soma(a,b,CallBack){
    return CallBack(a + b)
}

var multiplica = function(resultado){
    return resultado * 2
}

var total = soma(2,5,multiplica)
console.log(total)

//==========================

console.log(soma(10,2,function(x){
    return x + 20
}))