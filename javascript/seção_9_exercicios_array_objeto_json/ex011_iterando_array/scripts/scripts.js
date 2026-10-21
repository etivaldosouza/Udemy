/*

=> crie uma váriável qty, ela deve ter a quantidade de elementos do array(use length p/ identificar)

=> crie uma variável chamada el com o valor do terceiro elemento do array

*/ 

let arr = [1,2,3,4]

let qty = arr.length

let el = arr[2]

console.log(el)



//===========================================================//


const arr = [1, 2, 3, 4]

for(let i = 0; i < arr.length; i++){
    console.log(`na posição ${i} está o ${arr[i]} `)
}




const arr = [1, 2, 3, 5]

for(let i = 0; i < arr.length; i++){
    console.log(`o ${i+1}º elemento é o ${arr[i]}`)
}