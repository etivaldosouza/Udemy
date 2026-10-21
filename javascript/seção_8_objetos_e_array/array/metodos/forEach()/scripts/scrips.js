/*
    forEach

=> itera cada elemento do array e executa uma lógica que a gente definir

=> 

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

//===========================================================//



let nomes = ["Matheus", "Maria","José","Pedro","João"]

nomes.forEach((nome,posicao,arr) =>{
    console.log(`o nome ${nome} está na posição ${posicao} do array [${arr}] `)
})


/*
    obs:


    O forEach tem três parâmetros:(o item atual, o indice, array)

array.forEach((elemento, indice, array) => { ... })

elemento → o item atual (no nosso caso, nome)

indice → a posição no array(no nosso exemplo é o nome posicao)

array → o próprio array (se precisar. no nosso exemplo o array nomes)


obs: o indice e o array ñ é obrigado botar

*/ 


