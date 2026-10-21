/*
            Arrays (conjuntos)

=> array é um objeto JavaScript destinado a armazenar dados de qualque tipo, sequencialmente indexados a partir do zero.

=> cada elemento do array é um dado cuja referência  é um índice ímplicito, começando em zero e o array é denominado de array indexado

=> possibilidade de adicionar um conjunto de valores a uma variável

=> o Array deve ser escrito entre colchetes, separando os valores por vírgulas, veja:

*/ 

// estrutura de um array:

let numeros = [1,3,5,8,12]

let informacoes = ["Matheus",12,true,"Teste",2]

//============================================================//


const arr = []  // criei um array vazio

// criando elementos p/ o array vazio:

arr[0] = 'Etivaldo' 
arr[1] = 'Pedro'
arr[2] = 'João'
arr[3] = {profissão: 'Desenvolvedor', linguagem: 'JavaScript'}

console.log(arr[3].linguagem) // imprimo o valor de linguagem no elemento 3 do array


//==============================================================//

//posso ter vários tipos de dados no array

let arr = [1,true,5,false,'João']

console.log(arr[0])

console.log(arr[1])

console.log(arr)

//=============================================================//


// sintaxe para retornar dados do objeto contido no array:


let numeros = [1,3,5,8,12]

console.log(numeros[0])
console.log(numeros[2])


//==============================================================//

let novoArray = ['Maujor',14, {a: 5, b: 'Zé'}]

console.log(novoArray[0])

console.log(novoArray[2].a)

console.log(novoArray[2].b)

console.log(novoArray[novoArray.length -1]) //pega o ultimo elemento


// [] = array

// {} = objeto