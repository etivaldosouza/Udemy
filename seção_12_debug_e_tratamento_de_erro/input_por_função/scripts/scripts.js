/*
    Tratamento de input por função

=> Não podemos controlar os dados que o usuário enviar, então para o bom funcionamento do software, devemos tratar eles

=> Veja um exemplo de tratamento de number

*/ 

function checarNumero(valor){
    let resultado = Number(valor)
    if(Number.isNaN(resultado)){
        return null
    }else{
        return resultado
    }
}

console.log(checarNumero(5))

console.log(checarNumero('Teste'))


//======================================================//


function checaNumero(num){
    let numero = Number(num) // Converte o valor recebido para número
    if(Number.isNaN(numero)){ // Verifica se o valor convertido não é um número válido (NaN)
        console.log('Por Favor, passe só números para o programa') //*
    }else{
        return numero
    }
     
}
console.log(checaNumero(5))

console.log('20')
 
console.log(checaNumero('teste'))

console.log(checaNumero(false))

// lembrando que como usei o console.log e não o return então após a msg na tela ira dá undefined


/*



let numero = Number(num)

Converte o valor recebido para número.
Exemplos:

"10" → 10

"abc" → NaN

true → 1
false -> 0


*/ 


//=========================================================================//


function checaNumero(num){

    let numero = Number(num)

    if(Number.isNaN(numero)){
        console.log('ñ é numero')
        return        
    }
    
    console.log(numero)
      
}

checaNumero('oi')
checaNumero('5')

checaNumero(false)
checaNumero(true)


/*
    Explicações:

function checaNumero(num){

    Cria uma função chamada checaNumero que recebe um parâmetro chamado num.
    Esse parâmetro pode ser qualquer valor passado quando a função for chamada.


let numero = Number(num)

    Converte o valor recebido (num) para o tipo Number.

    Se num for algo como "10", vira 10

    Se num for algo como "oi", o resultado será NaN (Not a Number)

    Esse valor convertido é armazenado na variável numero.


if(Number.isNaN(numero)){

    Verifica se o valor armazenado em numero é NaN.
    Number.isNaN() é usado porque ele verifica corretamente se o valor é realmente NaN.



console.log('ñ é numero')
    Se o valor não puder ser convertido em número, essa linha é executada e imprime no console:

    ñ é numero


 return
    Encerra a execução da função imediatamente.

    Nada depois dessa linha será executado

    Como não há valor após o return, a função retorna undefined internamente, mas isso não aparece, pois você não está usando console.log fora da função.


}
Fecha o bloco do if.


console.log(numero)

    Essa linha só será executada se o valor for um número válido.
    Se num for "5", por exemplo, será exibido:

*/


