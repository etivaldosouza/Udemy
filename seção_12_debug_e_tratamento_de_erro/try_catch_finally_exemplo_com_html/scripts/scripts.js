function verifica(){
    var x = Number(document.getElementById('numero').value)
    try{
        if(isNaN(x)|| x === ''){
            throw('Informe Um numero')
        }else if(x < 10 || x > 20){
           throw('Informe um número entre 10 e 20') 
        }
        else{
            document.getElementById('msg').innerHTML = ` valor aceito com sucesso`  
        }
        
    }catch(erro){
        document.getElementById('msg').innerHTML = `Erro: ${erro}` 
    }finally{
        Number(document.getElementById('numero').value = '')
    }

}
/*
o uso do finally após o try cacth é quando eu quero fazer algo depois do try cacth ou seja independente de erro ou nao eu faco alguma coisa. no exemplo anterior eu coloquei dentro do finally um comando para limpar a caixa de texto apos o verificar
*/ 
/*


Number(document.getElementById('numero').value): faz com que se usarmos '10' etc... será reconhecido como number


if(Number.isNaN(x):

Verifica se o valor armazenado em x é NaN(ou seja ñ é um número).
Number.isNaN() é usado porque ele verifica corretamente se o valor é realmente NaN(NOTE A NUMBER).

*/ 
 
