/*
    Destructuring com array

=> Podemos definir variáveis com os valores de um array utilizando o destructuring

*/ 



let usuario = ['Ayrton',26,'Programador a bordo',2019,'Brasileiro'] // array

console.log(usuario.push('MA'))

console.log(usuario)

console.log(usuario.includes('Brasileiro'))

console.log(usuario.indexOf('Brasileiro'))
console.log(usuario.indexOf('Americano'))

//==============================================//


let arr1 = [3,2,1]   // array

let arr2 = ['Programador','a','bordo']

let arr3= ['teste','Fulano']

console.log(arr1.concat(arr2).concat(arr3)) 

console.log(arr3.concat(arr1).concat(arr2))



//===============================================//


let usuario = ['Ayrton',26,'Programador a bordo',2019,'Brasileiro']

let [nome,idade,,,nacionalidade] = usuario  // destructuring(usei a virgulas com os espaços em branco para pular os elementos do array programador a bordo e 2019)

console.log(nacionalidade)
console.log(nome)
console.log(idade)


//================================================//

let numeros = [2,4,5,8]

let [num1,num2,num3,num4] = numeros


console.log(num1)
console.log(num4)

console.log(numeros[numeros.length - 1]) // imprime o ultimo nr do array
console.log(numeros[0]) // imprime o numero na posição 0
