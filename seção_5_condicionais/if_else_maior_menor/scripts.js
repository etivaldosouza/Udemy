/*
    Faça uma condicional if para verificar se a é maior que b

=> se for: mude o valor de resultado para: "É menor"

=> se não for: mude o valor de resultado para: "É maior"

=> note que a segunda mudança precisa estar com um else

=> imprima o valor de resultado após a condicional

*/ 


let a = 90

let b = 30

let resultado     // apenas declaro a variável(dou um nome) dessa forma posso alterar seu valor depois desde que use o let


if(a > b){
    resultado = 'É maior'
}else{
    resultado = 'É menor'
}

console.log(resultado)