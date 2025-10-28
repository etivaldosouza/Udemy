/*
    iterando objeto com o loop for

=> para iterar usando o loop for normal tem que utilizar o objec.keys que irá retornar um array e a partir disso fazermos a iteração com base no array das propriedades gerado. 
*/ 


var usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: 27,
    sexo: 'M',
    pais: 'Brasil'
}

var prop = Object.keys(usuarioFunction)
console.log(prop)

for(var i = 0; i < prop.length; i++){
    console.log(prop[i])
}

//=================================================//



var usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: 27,
    sexo: 'M',
    pais: 'Brasil'
}

var valores = Object.values(usuarioFunction)

console.log(valores)

for(var i = 0; i < valores.length; i++){
    console.log(valores[i])
}

//==================================================//


var usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: 27,
    sexo: 'M',
    pais: 'Brasil'
}

var props = Object.keys(usuarioFunction)
console.log(props)

for(var i = 0; i < props.length;i++){
    console.log(usuarioFunction[props[i]])
}



//====================================================//

// iterando com loop for of


const usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: 27,
    sexo: 'M',
    pais: 'Brasil'
}

var props = Object.keys(usuarioFunction)

console.log(props)

for(var props of props){
    console.log(usuarioFunction[props])
}


//======================= utilizando for in ==========================//

const usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: 27,
    sexo: 'M',
    pais: 'Brasil'
}

const props = Object.keys(usuarioFunction)

console.log(props)

for(const props in usuarioFunction){
    // console.log(props) imprime apenas as propriedades
    console.log(props,usuarioFunction[props]) // imprime os valores das propriedades
}