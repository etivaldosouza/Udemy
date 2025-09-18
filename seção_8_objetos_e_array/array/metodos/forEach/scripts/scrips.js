/*
    forEach

=> itera cada elemento do array e executa uma lógica que a gente definir

*/ 


let numeros = [1,2,3,4,5,6]

numeros.forEach((numero) => console.log(numero * 2))

//numero funciona como o i do for ou do while(ele vai iterar em cada elemento do array)

//=================================

let arr = [12,17,60,319]

arr.forEach(numero => {
    console.log(numero * 2)
})


//======================================


let nomes = ["Matheus", "Maria","José","Pedro","João"]

nomes.forEach(nome =>{
    console.log(`olá ${nome}`)
})