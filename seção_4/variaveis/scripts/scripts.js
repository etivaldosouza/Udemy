/*
        VARIÁVEIS

    var => forma antiga optar por usar o let ou const

    let => palavra reservada e atual de declarar uma variável

    const => usado para quando não queremos mudar o valor da variável até o fim do programa.


*/


var nome = 'Etivaldo'
const ip = '127.0.0.1'

console.log(nome)
console.log(ip)

ip = 'jksdhjjshj' // irá dá erro pois a declaração inicial da variável foi utilizada com const, oq ñ permite alterar o valor até o fim do programa


/*
            CONVENÇÃO NO NOME DA VARIÁVEL:

    => Ñ PODE COMEÇAR COM NÚMERO. ex:  let 2test

    => PODE TERMINAR COM NÚMERO. ex: let teste2

    => PODE TER $ OU _ MAS OUTROS CARCTERES NÃO. ex: let $nome e _nome;

    => PODEMOS INICIAR COM LETRAS MAIÚSCULA ex: 
    let MeuPrimeiroNome = 'matheus' (PascalCase)

    => PODEMOS USAR camelCase. 
    ex: let MeuPrimeiroNome = 'João'
*/

const nome = 'Souza'

function qra(){
    const nome = 'Etivaldo'
    console.log(nome)
}

qra()

nome = 'coelho' //(COM CONST Ñ PERMITE REDEFINIR)

console.log(nome) // vai dá erro pois com const nao permite a gente nem redeclarar e nem redefinir:

// const nome = coelho (redeclarar)
// nome = coelho (reatribuir)


// com let  permite apenas reatribuirmos(alterar a variavel)


let idade = 25
console.log(idade)

idade = 30
console.log(idade)


// com var permirte tanto redeclarar como redefinir

var idade = 10
console.log(idade)

var idade = 30
console.log(idade)

idade = 40
console.log(idade)


/*
    particularidade da constante 

=> um valor que pertence a uma constante pode ser alterado.
ex:
*/ 

const linguagens = ['Java','Python','JS']

linguagens[2] = 'GO'
console.log(linguagens)  // alterei um valor dentro da constante


const linguagens = ['html','css','rubi'] // vai dá erro pois alterei toda a constante
console.log(linguagens)

// exemplo 2:

const usuario = {
    nome: 'Etivaldo',
    idade: 25
}

usuario.nome = 'Pedro'
usuario.idade = '55'

console.log(usuario)