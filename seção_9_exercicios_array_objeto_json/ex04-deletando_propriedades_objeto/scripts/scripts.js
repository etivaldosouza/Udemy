/*
    Exercício 04

=> Adicione a propriedade janelas no onibus, com valor de 20

=> delete a propriedade rodas

=> imprima a propriedade janelas no console

*/ 


let onibus = {

    rodas: 8,
    limitePassageiros: 40,
    portas: 2,

}

onibus.janela = 20

delete onibus.rodas

console.log(onibus)
