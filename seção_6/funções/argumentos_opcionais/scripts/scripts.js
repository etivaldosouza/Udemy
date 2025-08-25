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
    if(a === undefined || b === undefined){
        console.log(`esta função necessita dos dois valores`)
    }else{
        return a + b
    }
}

console.log(soma(1))

console.log(soma(2,5))

// obs: Se você quiser que a função não mostre undefined quando faltar argumento, pode retornar algo no if, por exemplo:

function soma(a,b){
    if(a === undefined || b === undefined){
        return "Esta função necessita dos dois valores"
    }
    return a + b
}

console.log(soma(1))    
console.log(soma(2,5))  