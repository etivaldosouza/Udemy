/*
=> crie um objeto calculadora

=> que tenha os seguintes métodos: somar,subtrair,multiplicar e dividir

=> utilize cada um dos métodos e imprima os valores no console

*/ 


/* 
    Propriedades e Métodos do objeto:

=> objeto: 

    em javascrtipt, objeto é uma estrutura destinada a armazenar dados, onde cada dado é composto por um par chave(identificador do dado)/valor(str,function, objeto etc)

=> Método: 

    Dados cujo valor é uma função(bloco de código destinado a executar uma tarefa) é denominado métodos do objeto.

=> Propriedades: 

    os demais dados são denominados propriedades

=> Função: 

    bloco de código destinado a executar uma tarefa

*/

let calculadora = {

    somar: function soma(a,b){
        return a + b
    },
    subtrair: function subtrai (a,b){
        return a - b
    },
    multiplicar: function multiplica(a,b){
        return a * b
    },

    dividir: function divide(a,b){
        return a/b
    }
    
}

console.log(calculadora.somar(2,3))

console.log(calculadora.subtrair(3,2))

console.log(calculadora.multiplicar(2,3))

console.log(calculadora.dividir(10,2))