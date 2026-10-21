/*
                Operador Ternário:

    - Faz um comparativo em apenas uma linha de código

    - console.log(true ? 1 : 2 ) // se for verdadeiro é 1 se for falso é 2

    - console.log(false ? 'falso' : 'verdadeiro') se for false é falso se for verdadeiro é verdadeiro

    - ñ é muito utilizado e pode deixar o código complicado de ler;

*/


console.log( 5 < 3 ? 'verdadeiro':'falso') // falso ( vc tem a condicao e em seguida as respostas se a condicao for verdadeira a resposta é a primeira opcao se for falso a resposta é a segunda opcao)

console.log(false ? 5 : 4 ) // (se a condição é false então vai retornar a segunda resposta que é 4)

nome = 'Pedro'
idade = 14

maiorMenor = (idade > 21 ? 'maior de idade' : 'menor de idade')
    console.log(`pedro tem ${idade} anos e é ${maiorMenor} `)
