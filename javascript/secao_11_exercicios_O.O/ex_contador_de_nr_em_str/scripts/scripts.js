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

        for(let nr of str){ // percorre cada elemento(nr) da string

            if(digitos.includes(nr)){ 
                contador++
            }                      
        }
        return contador  
    }
}

let verificaNumeros = new ContadorNumeros()

console.log(verificaNumeros.contarNumeros('Etivaldo1983'))

console.log(verificaNumeros.contarNumeros('ecoelho83'))



//======================================================================//

/*
    os casos anteriores foram com str.

    agora veremos com array:


*/ 


class ContadorNumeros{
    constructor(){

    }
    contarNumeros(str){
        let caracteres = str.split('')
        let contador = 0
        let numeros = '0123456789'

        for(let elemento of caracteres){ // percorre cada elemento do array caracteres
            if(numeros.includes(elemento)){   // se elemento está incluido em numeros
                contador++
            }
        }
        return contador
    }
}

let digitos = new ContadorNumeros() 

console.log(digitos.contarNumeros('etivaldo1983'))


