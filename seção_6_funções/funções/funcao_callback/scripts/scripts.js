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

