/*

*/ 



let usuario = ['Ayrton',26,'Programador a bordo',2019,'Brasileiro']

console.log(usuario.push('MA'))

console.log(usuario)

console.log(usuario.includes('Brasileiro'))

console.log(usuario.indexOf('Brasileiro'))
console.log(usuario.indexOf('Americano'))


let arr1 = [3,2,1]

let arr2 = ['Programador','a','bordo']

let arr3= ['teste','Fulano']
console.log(arr1.concat(arr2).concat(arr3)) 





let usuario = ['Ayrton',26,'Programador a bordo',2019,'Brasileiro']

let [nome,idade,,,nacionalidade] = usuario

console.log(nacionalidade)
console.log(nome)
console.log(idade)





