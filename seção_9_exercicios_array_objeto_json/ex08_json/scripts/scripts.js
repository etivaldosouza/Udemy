/*

=> crie um JSON com 3 propriedades

=> Atribua ele a uma variável

=> Acesse as propriedades imprimindo no console

*/ 


let pm = {
    "nome": "Etivaldo",    
    "id": 822297,
    "graduacao": "CB"
}

// p/ acessar os valores das propriedades é igual ao objeto:

let {nome,id,graduacao} = pm  // utilizando destructuring

console.log(nome,id,graduacao)


//============== utilizando o Object.values =======================//

let pm = {
    "nome": "Etivaldo",    
    "id": 822297,
    "graduacao": "CB"
}

let valor_prop = Object.values(pm) // exibe os valores das chaves num array

console.log(valor_prop)


//========================================================//

// quando quero acessar os nomes das propriedades


let pm = {
    "nome": "Etivaldo",    
    "id": 822297,
    "graduacao": "CB"
}

let propriedades = Object.keys(pm)
console.log(propriedades)