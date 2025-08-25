/*

                    Argumentos Opcionais:

=> Podemos chamar uma função em JS sem o número igual de parâmetros determinados

*/ 

function nomeComIdade (nome,idade){

    if(idade === undefined){
        console.log(`seu nome é ${nome}`)
    }else{
        console.log(`seu nome é ${nome} e você tem ${idade} anos`)
    }
}

nomeComIdade('João')

nomeComIdade('joão',42)


function soma(a,b){
    if(a === undefined)
}