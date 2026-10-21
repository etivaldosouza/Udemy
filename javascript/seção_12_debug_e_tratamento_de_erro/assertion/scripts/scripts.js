/*
    Assertions

=> Verificações no programa, que são utilizadas para assegurar que tudo ocorra da forma esperada

*/ 


function iterarArray(arr){
    if(arr.length === 0){
        throw new Error(" O array precisa ter elementos")
    }else{
        for(let i = 0; i < arr.length; i++){
            console.log(i,'-',arr[i])
        }
    }
}


iterarArray([])
iterarArray([2,4,6,8,9])



//==================== outra forma ========================//


let arr1 = [1,2,3,4,5]
let arr2 = []

function iterarArray(arr){
    if(arr.length === 0){
        throw new Error(" O array precisa ter elementos")
    }else{
        for(let i = 0; i < arr.length; i++){
            console.log(i,'-',arr[i])
        }
    }
    
}




iterarArray(arr1)
iterarArray(arr2)
