/*
    metodo keys()

=> Podemos verificar quais as chaves cada objeto possui.

*/

let objeto = {
    'chave1': 1,
    'chave2': 2,
    'chave3': 3
}

console.log(objeto)

console.log(Object.keys(objeto)) // imprimo apenas as propriedades(chaves) do objeto 

//========================================//

let pessoa = {
    nome: "Etivaldo",
    idade: 42,
    estadocivil: "casado",
    profissao:"Programador"
}

if(pessoa.regiao in Object.keys(pessoa)){
    console.log('propriedade já existe')
}else{
    console.log(pessoa.regiao = 'Pernambuco')
}

console.log(pessoa)

