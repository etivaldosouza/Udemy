/*

=>  Escreva uma função que recebe a idade de uma pessoa

=>  se ela tem 18 anos ela pode entrar na autoescola,imprima uma mensagem informando isso

=> se ela tem menos, ela ñ pode, imprima outra mensagem com este aviso

=> execute a função nos dois casos

*/ 


function idade(idadeRecbebida){
    if(idadeRecbebida >= 18){
        console.log(`você tem ${idadeRecbebida} anos e pode se matricular`)
    }else {
        console.log(`você tem ${idadeRecbebida} anos e ñ pode se matricular`)
    }

}

idade(19)
idade(17)
idade(21)
idade(18)