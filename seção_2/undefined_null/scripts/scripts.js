/*
                Empty Value (valores vazios)

    - Temos duas palavras reservadas:

    - undefined e null

    - Sempre que você se deparar com estas palavras, o JS basicamente
    quer dizer que os valores não existem ou que uma determinada variável ñ tem valor.

    valor undefined: quando a variavel é declarada(atribuido nome a ela) porém ñ é inicializada(ñ é atribuido valor a ela)
*/


// o js faz uma conversão silenciosa(ou seja, a gente espera uma resposta e o js nos retorna outra) sem apresentar nenhum erro

console.log('123' + 4) 
console.log('30' - 4)
console.log('neto' * 3)

console.log(typeof('123' + 4)) 
console.log(typeof('30' - 4))
console.log(typeof('neto' * 3))


       /*

       valores que por padrão são considerados false:
       ----------------------------------------------
         null , underfined, ' '(string vazia), false, 0.

       */