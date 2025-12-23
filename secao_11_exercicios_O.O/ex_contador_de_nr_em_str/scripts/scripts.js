/*
    Contador de Números em uma String

Enunciado

👉 Crie uma classe chamada NumberCounter.

Requisitos:

A classe deve ter um constructor vazio

A classe deve ter um método chamado countNumbers

O método deve receber uma string

O método deve contar quantos números (0 a 9) existem na string

O método deve retornar a quantidade encontrada

*/ 

class ContadorNumeros{
    constructor(){

    }
    contarNumeros(str){
        
        let digitos = "0123456789"
        let contador = 0 

        for(let nr of str){

            if(digitos.includes(nr)){
                contador++
            }                      
        }
        return contador  
    }
}

let verificaNumeros = new ContadorNumeros()

console.log(verificaNumeros.contarNumeros('Etivaldo1983'))