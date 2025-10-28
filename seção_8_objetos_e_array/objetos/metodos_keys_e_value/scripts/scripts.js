/*
    metodo keys() 

=> Podemos verificar quais as chaves cada objeto possui.(metodo keys)

=> ou se preferir podemos verificar apenas os valores das propriedades(metodo value)

*/

let objeto = {
    'chave1': 1,
    'chave2': 2,
    'chave3': 3
}

console.log(objeto)

console.log(Object.keys(objeto)) // imprimo um array apenas com as propriedades(chaves) do objeto 

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


//===================================================//


function imprimeUsuario({nome,idade,sexo, regiao = 'Nordeste'}){
    console.log(nome,idade,sexo,regiao)
}

const usuarioFunction = {
    nome: 'Etivaldo',
    idade: 42,
    sexo: 'M'
}

imprimeUsuario(usuarioFunction)

console.log(Object.keys(usuarioFunction)) // imprime um array com as propriedades do objeto

console.log(Object.values(usuarioFunction)) // imprime um array apenas com os valores das propriedades

