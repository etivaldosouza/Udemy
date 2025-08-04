/*
    crie uma estrutura if que verifica a entrada na balada, se tiver mais de 18 anos pode entrar

    armazenar a idade em uma váriavel com let
    insira uma instrução console,log('pode entrar'), caso tenha mais que 18 anos

*/ 

let idade = prompt('Informe sua idade')

if(idade > 18){
    alert(`vc tem ${idade} anos pode entrar`)
} else {
    alert(`vc tem ${idade} anos ñ pode entrar!`)
}