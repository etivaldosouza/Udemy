/*
    iterando objeto com o loop for

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


