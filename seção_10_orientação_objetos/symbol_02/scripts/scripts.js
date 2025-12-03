/*
    symbol

=> tipo de dado primitivo assim como number,string,underfined 

=> seu uso é para criar propriedades privadas dentro do objeto e sua referencia vai ser única

=> ñ pode ser alterado.

*/

let id = Symbol('id')
let id2 = Symbol('id')

console.log(id === id2)
console.log(typeof id, typeof id2)




//================================================================//   



const NOME = Symbol('nome')   // const recomenda ser com letra maiúscula

const SAUDACAO = Symbol('saudacao') // o nome dentro é mais p/ identificar na hora da impressao dos simbols. porém ñ é necessario


pessoa = {
    [NOME] : 'Etivaldo',     // symbol
    idade: 35
}

console.log(pessoa)



// criando uma propriedade nova com o mesmo nome da propiredade privada anterior

pessoa.NOME = 'Etivaldo Souza'

console.log(pessoa.NOME)

console.log(pessoa[NOME])

console.log(pessoa)



//atribuindo valor ao symbol

pessoa[SAUDACAO] = function(){
    console.log('Olá!!')
}


console.log(pessoa)

pessoa[SAUDACAO]()


console.log('============ for =======================')
//========================================================  

for(propriedade in pessoa) {          //as propriedades symbol() ñ vai aparecer. pois são propriedades pirvadas
    console.log(propriedade)
    console.log(pessoa[propriedade])
    
}

// por ser privado nao conseguimos visualizar o symbol no for in

/*
    para listarmos as propriedades privadas do objeto utilizando o método
    do construtor: Object.getOwnPropertySymbols()
*/ 

console.log(Object.getOwnPropertySymbols(pessoa))
