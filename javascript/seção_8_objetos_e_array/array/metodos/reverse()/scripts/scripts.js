/*
    reverse()

=> esse método inverte a ordem dos elementos de um array sem modificar o array original(permanece os mesmos elementos, muda apenas a ordem)

=> depois de usar reverse(), o array fica invertido de forma permanente (não cria uma cópia por padrão).

*/


const arr = [1,2,3,4,5,6,7,8,9]

console.log(arr.reverse()) // iverteu a ordem do array

const inverte = arr.reverse() 

console.log(inverte)

console.log(arr)

//=========================================//


const arr = [12,17,60,319]

console.log(arr.reverse())

console.log(arr)


//==========================================//

// maneira de inverter sem modificar o array original (fazendo uma cópia):

// usando o operador spreed [...]

const arr = [12,17,60,319]

const invertido = [...arr].reverse() // gera apenas copia do array invertido s/ alterar o original


console.log(invertido)

console.log(arr)



// Usando slice()

const arr = [12,17,60,319]

const invertido = arr.slice().reverse() // gera apenas copia do array invertido s/ alterar o original

console.log(invertido)

console.log(arr)


//============================================//

const arr = [12,17,60,319]

console.log(arr.slice().reverse()) // gera apenas copia do array invertido s/ alterar o original

console.log(arr)