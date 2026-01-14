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



