/*
    Closure

=> uma função que se lembra do ambiente em que ela foi criada

*/ 

function armazenarSoma(x){
    return y => x + y
}

let soma1 = armazenarSoma(3) //(y = 3 + y)
console.log(soma1(5)) // 3 + 5 = 8
let soma2 = armazenarSoma(5)
console.log(soma2(10)) // 5 + 10


//================================================//

function lembrarSoma(x){
    return function(y){
        return x + y
    }
}

let soma1 = lembrarSoma(2)
console.log(soma1(5))

let soma2 = lembrarSoma(5)
console.log(soma2(7))

//==================================================//

function contador(i) {
    let cont = i
    let somarContador = function(){
        console.log(cont)
        cont++
    }
    return somarContador
}

let meuContador = contador(5)

meuContador()
meuContador()
meuContador()
meuContador()

let meuContador2 = contador(1)

meuContador2()
meuContador2()
meuContador2()
