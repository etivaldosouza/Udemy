/*
    padStart()

=> O método padStart() em JavaScript é usado em strings para "preencher" (adicionar caracteres à esquerda) até que a string atinja um comprimento desejado.

=>  Sintaxe:

    string.padStart(targetLength, padString)

    targetLength → o comprimento final que você deseja que a string tenha.
    --------------
    padString (opcional) → a string usada para preencher.
    ------------------
    Se não for informada, o preenchimento será feito com espaços " ".

    Se o preenchimento for maior do que o necessário, ele será cortado para caber.


=> resumindo: serve para padronizar um número com a quantidade de dígitos que a agente quer
*/ 

//================================================//

let milAocontrario = '1'

console.log(milAocontrario.padStart(4,'0'))

//=================================================//

let sku = '34'

novoNumero = sku.padStart(6,'0')

console.log(novoNumero)


//===================================================//


let sku2 = '7348'

console.log(sku2.padStart(6,'0'))


