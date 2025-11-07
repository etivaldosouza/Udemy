/*
   
Crie uma função chamada removeDuplicates que recebe como parâmetro um array de elementos.

A função deve remover os elementos duplicados do array, mantendo apenas as ocorrências únicas.

*/ 

function removeDuplicates(arr){

    let unicos = []

    for(let item of arr){
        if(!unicos.includes(item)){
            unicos.push(item)
        }
    }
    return unicos
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))