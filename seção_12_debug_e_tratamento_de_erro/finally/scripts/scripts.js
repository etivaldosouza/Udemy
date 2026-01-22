/*
    Finally

=> Finally(significa finalmente) é executada independente do resultado do try/catch

=> é uma instrução que vai executar toda vez que um codigo entrar dentro do try ou catch

=> e pode existir com try e catch ou apenas try

*/ 

//let b = 2

try{
    let a = 2 + b
}catch(e){
    console.log(e)
    //throw `Erro: variável ñ informada`
}finally{
    console.log('executou')
}

console.log("teste") // se colocar o throw no cath o programa encerra la no catch e executa so o finally e não executa mais nada apois isso.

