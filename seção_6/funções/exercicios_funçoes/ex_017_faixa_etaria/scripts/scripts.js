/*
    Identifique a Faixa etária

=> crie uma função chamada faixaEtaria que aceita um parametro chamado idade

=> Identifique três faixas etárias: criança(menor que 12 anos), jovem(12 a 24 anos), adulto(maior que 25 anos)

=> execute a função duas vezes e encapsule os resultados em variáveis diferentes

=> uma variável deve ter o nome de criança e enviar como argumento uma idade de criança

=> a outra o nome adulto e uma idade de adulto para executar a função criada

*/    


function faixaEtaria(idade) {
    
    if(idade < 12 ){

        console.log(`você tem ${idade} anos e é uma criança`)

    }else if(idade <= 24){

        console.log(`você tem ${idade} anos e é um jovem`)
        
    }else{
        console.log(`você tem ${idade} anos e é um adulto`)
    }
}

let crianca = faixaEtaria(8)

let adulto = faixaEtaria(29)



// obs: se quero que as variaveis guardem resultados então devo usar o return:

// quando uso o return eu estou armazenando o valor em uma variavel

function faixaEtaria(idade) {
    
    if(idade < 12 ){

        return "criança"

    }else if(idade <= 24){

        return "jovem"
        
    }else{
        return "adulto"
    }
}

let crianca = faixaEtaria(8)

let adulto = faixaEtaria(29)



console.log(crianca);
console.log(adulto);



/*
    O que está acontecendo:

    => Criamos a função faixaEtaria que recebe a idade.

    => Usamos if / else if / else para verificar em qual faixa a idade se encaixa.

    => Executamos duas vezes: uma vez passando idade de criança, outra de adulto.

    => Guardamos os resultados em variáveis chamadas crianca e adulto.

    => Mostramos no console.

*/ 