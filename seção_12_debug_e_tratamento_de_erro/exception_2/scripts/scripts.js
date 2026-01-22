function saudacao(nome){
    if(typeof nome != 'string'){
        throw(`o parâmetro nome precisa ser uma string`)
    }else{
        console.log(`olá ${nome}`)
    }
}


saudacao('Etivaldo')
saudacao(1223)