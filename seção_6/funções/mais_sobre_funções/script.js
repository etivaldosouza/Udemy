/*
    parâmetro != argumento.

=> parâmetro refere-se genericamente a um valor indefinido

=> argumento é o valor efetivo do parâmetro

*/ 

//======================= ex: ===============================//

function somarDoisNumeros(n1,n2){ // n1,n2 são parâmetros
    
    var soma = n1 + n2
    return soma
} 

console.log(somarDoisNumeros(3,5)) // 3,5 são os argumentos



//================================================================//


const soma = function(a,b){
    return a + b   
}

const total = soma(3,5)

console.log(total) 


// outra maneira:

const soma = function(a,b){
    return a + b   
}

console.log(soma(4,5))

//==========================================//

const multiplica = function (x,y){
    return x * y
}

console.log(multiplica(4,2))

const mult = multiplica(4,3)
console.log(mult)

//==============================================//


const saudacao = function(nome) {
    if(nome == 'Etivaldo'){
        return 'olá Etivaldo'
    }else{
        return `olá ${nome}`
    }
}

const qra = (saudacao('Etivaldo')) // ou console.log(saudacao('etivaldo'))
console.log(qra) 

//===========================================================//

function podeDirigir(idade,cnh){
    if(idade >= 18 && cnh == true){ //*
        console.log('pode dirigir')
    }else {
        console.log('ñ pode dirigir')
    }
}

podeDirigir(30,true)
podeDirigir(44,0) // 0 == false
podeDirigir(19,1) // 1 == true


// cuidado ao usar o ===(extritamente igual):


/*

    cnh === true: A CNH deve ser estritamente igual ao valor booleano true. O uso de === (igualdade estrita) é crucial aqui.

    Comportamento do Código:

    podeDirigir(30, true):

    30 >= 18 é verdadeiro.

    true === true é verdadeiro.

    Ambas as condições são verdadeiras, então o código imprime "pode dirigir".

    podeDirigir(44, 0):

    44 >= 18 é verdadeiro.

    0 === true é falso (porque 0 é um número, não o valor booleano true).

    A condição falha, e o código imprime "ñ pode dirigir".

    podeDirigir(19, 1):

    19 >= 18 é verdadeiro.

    1 === true é falso (porque 1 é um número, não o valor booleano true).

    A condição falha, e o código imprime "ñ pode dirigir".

/*