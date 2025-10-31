/*
   crie um objeto onibus com as propriedades:

    * rodas = 8
    * limite de passageiro = 40
    * portas = 2
    * 
    * imprima todas od valores das propriedades no console
    
*/ 
 

let onibus = {

    rodas: 8,
    limitePassageiros: 40,
    portas: 2,

}

// utilizando o destructuring no objeto para acessar os valores das propriedades

let {rodas: irodas, limitePassageiros: ilimite, portas: iportas} = onibus

console.log(irodas,ilimite,iportas)


//========== maneira 2 ===================

let {rodas,limitePassageiros,portas} = onibus

console.log(rodas,limitePassageiros,portas)

