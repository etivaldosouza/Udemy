/*
                    else if

=> ainda podemos encadear mais condições com o else if

=> ou seja, antes de executar um else, ou até mesmo sem ele, podemos
verificar mais condições

=> o else if é usado para testar uma nova condição se a primeira condição falhar.

*/

let a = 5
let b = 3

if(a + b == 3) {
    console.log('o resultado é 3')
}else if(a == 4) {
    console.log('o valor de a é 4')
}else if(b == 3) {
    console.log('o valor de b é 3')
}else{
    console.log('nenhuma das condições acima!')
}


let nome = 'Matheus'
let idade = 28

if(nome != undefined && nome == 'joaquim'){
    console.log('nome está definido' )
}else if(nome == 'Matheus' && nome.length > 5 && idade == 50){ 
    console.log('o nome é Matheus')
}else{
    console.log('não é Matheus!') 
}

/*
 - undefined e null

    - Sempre que você se deparar com estas palavras, o JS basicamente
    quer dizer que os valores não existem ou que uma determinada variável ñ tem valor.

    valor undefined: quando a variavel é declarada(atribuido nome a ela) porém ñ é inicializada(ñ é atribuido valor a ela) exemplo: let nome
    

    valor null: quando a variavel é declarada e inicializada, porém o valor dela é nulo, ou seja, não existe.
    exemplo: let nome = null
- Ambos os valores são falsy, ou seja, se você fizer uma verificação de verdade, eles serão considerados falsos.

*/


// Exemplo de uso do else if sem else:

if(1 > 2){
    console.log('teste')
}else if(1 == 1 ){ 
    console.log('testando')
}