/*
    Contador de Vogais

=> Crie uma classe chamada VowelCounter que representa um contador de vogais

Requisitos:

A classe deve ter um construtor que inicializa um objeto vazio

A classe deve ter um método chamado countVowels

O método countVowels deve receber uma string como parâmetro

O método deve contar quantas vogais existem na string

Considere as vogais: a, e, i, o, u

A contagem não deve diferenciar letras maiúsculas de minúsculas

Espaços em branco devem ser ignorados


Construtor vazio = não recebe parâmetros e não cria this.propriedade

Você só cria o objeto para usar os métodos.

*/

class VowelCounter {
    constructor() {
        
    }
    countVowels(str) {
        let vowels = "AaEeIiOoUu";
        let count = 0;

        for (let char of str) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    }
}

let caracters = new VowelCounter();

console.log(caracters.countVowels("JavAScripIts é uma Excelente LingUagens"));




//==========================================================================//


class ContadorVogais {
    constructor() {
        
    }
    contarVogais(str) {
        let vogais = "aeiou";
        let contador = 0;

        for (let letra of str) {
            if (vogais.includes(letra)) {      
                contador++;
            }
        }
        return contador;
    }
}

let caracteres = new ContadorVogais();

console.log(caracteres.contarVogais("JavAScripIts é uma Excelente LingUagens"));


/*

    O método includes() verifica se um valor existe dentro de uma string ou array.

    vogais.includes("a") // true
    vogais.includes("b") // false

*/