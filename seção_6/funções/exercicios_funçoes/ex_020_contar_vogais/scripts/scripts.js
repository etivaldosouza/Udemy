/*

=> Escreva uma função chamada countVowels que recebe uma string como argumento

=> a função deve contar o número de vogais presentes na string(considerando letras maiúsculas e minúsculas)

=> a função deve retornar o total de vogais encontradas

*/ 


function countVowels(str){

    let vogais = "aeiouAEIOU" // todas as vogais maiúsculas e minúsculas
    totalVogais = 0

    for(let i = 0; i < str.length; i++){

        if(vogais.includes(str[i])){
            totalVogais = totalVogais + 1
        }
    }

    return totalVogais;
}


console.log(countVowels('Etivaldo'));//
console.log(countVowels("PARALELEPIPADO"));//


