/*
    Arrow Function

=> uma outra forma de declarar funções

=> bem utilizadas nos frameworks modernos

=> porém não deve substituir as functions por completo(veremos mais tarde os detalhes)

*/

const parOuImpar = (n) =>  {
    return n % 2 ;
}

console.log(parOuImpar(3))
console.log(parOuImpar(0))
console.log(parOuImpar(5))

//==================================================//


let consoleTeste = () => {

    console.log("olá Mundo!")
}


consoleTeste()


//=================================================//

let multiplica = (a,b) => {
    return a * b
}


let imprimirFuncao = multiplica(10,5)
console.log(imprimirFuncao)


//==================================================//

let soma = (x,y) => {
    return x + y
}

console.log(soma(200,30))


//==========================================//












