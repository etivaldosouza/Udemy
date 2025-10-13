/*
    Rest operator

=> Uma forma de função receber indefinidos parâmetros e transforma-los em um array para depois manipularmos;

=> O operador rest vai virar um array ou seja: o operador rest vai transformar todos os argumentos em um array e ai a gente manipula como quisermos esse array.

=> O parâmetro é definido por: ...nome

*/ 

let num = 1
let num1 = 5
let num2 = 3
let num3 = 4



function imprimirNumeros(...args){               
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

imprimirNumeros(num,num1,num2)

console.log('pausa')

imprimirNumeros(num2,num3)

console.log('pausa')

imprimirNumeros(2,6,8,9,5,3,2,5,6,2,4,5)

//============================================//



let nome1 = 'João'
let nome2 = 'Maria'
let nome3 = 'Ana'
let nome4 = 'Pedro'


function imprimirNomes(...nome){

    for(let i = 0; i < nome.length; i++){

        console.log(nome[i])
        
    }
}

imprimirNomes(nome1,nome3)

console.log('**Pausa**')

imprimirNomes(nome1,nome2,nome3,nome4)

console.log('**Pausa**')

imprimirNomes('Etivaldo','Carlos', 'Karine')


//===================================================//


function pessoa(nome,idade,...curso){
    console.log(nome,idade,curso)
}

pessoa('Etivaldo',42,'JavaScript','Pyton','Java')



//==============================================//


function pessoa(nome,idade,...curso){
console.log(curso[3]["linguaExtrangeira"])
}

pessoa('Etivaldo',42,'JavaScript','Pyton','Java',{linguaExtrangeira: "Inglês"})


//===================================================================//

const somar = function(...parcelas){ 

    let soma  = 0

    for(let parcela of parcelas) {

        soma = soma + parcela
        
    }
    return soma
}

console.log(somar(5,2,3))   

/*
    parcelas => é o array (...parcelas = [5,2,3] pois transforma os argumentos em array)

    parcela => é cada elemento do array
*/



//====================================================================//

k