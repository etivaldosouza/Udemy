/*
    Closure

=> uma função que se lembra do ambiente em que ela foi criada

=> A função interna “carrega” com ela o ambiente onde foi criada, incluindo variáveis da função externa.

=> Uma função interna acessa variáveis da função externa,

=> Mesmo depois da função externa já ter sido finalizada.

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


//=================================================================

function imprimeNome(){

    let nome = 'Etivaldo'
    
    return function(){
        return nome
    }
}

let func = imprimeNome()
console.log(func())


//==========================================================================

function minhaBibioteca(){

    function auxiliar(valor){
        return 10 + valor
    }

    return {

        add5(){
            return auxiliar(5)
        },

        add7(){
            return auxiliar(7)
        }
    }
}



let biblioteca = minhaBibioteca()

console.log(biblioteca.add5())
console.log(biblioteca.add7())


//======================================================

function imprimeNomeCompleto(){
    console.log('teshima')
}

function inicializa (){
    let nome = 'Ayrton'
    console.log('Primeiro')
    setTimeout(imprimeNomeCompleto,2000)
}

inicializa()

// obs: a função setTimeout recebe 2 parâmetros o primeiro é uma função e o segundo parâmetro é o tempo que ela vai ser executada

function resultado(m){
    return function(){
        console.log(`a media é ${m}`)
}
}
function media(x,y){
    let m = (x+y)/2
    setTimeout(resultado(m),2000)
}

media(100,0)


//======================= EXEMPLO 3 ===========================================//

function contador() {
    let numero = 0
    return function(){
        numero++
        return numero
    }
}

let funcaoInterna = contador()

console.log(funcaoInterna())



//=========================== Guardando o nome de uma pessoa ========================//


function criarSaudacao(){                           
    let nome = 'etivaldo'
    return function(){
        return `olá ${nome}`
    }

}

let saudacaoNome = criarSaudacao()

console.log(saudacaoNome())


//outra maneira ====================//


function saudacaoNome(nome){
    return function(){
        return `olá ${nome}`
    }
}

let saudarNome1 = saudacaoNome('Etivaldo')
let saudarNome2 = saudacaoNome('Pedro')
let saudarNome3 = saudacaoNome('Carlos')


console.log(saudarNome1())
console.log(saudarNome2())
console.log(saudarNome3())

