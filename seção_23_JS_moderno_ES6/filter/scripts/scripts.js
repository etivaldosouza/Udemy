/*
    Filter

=> É um método de array para filtrar dados, baseado em alguma condição que estabelecemos

=> Isso nos dá um array com apenas os elementos que queremos, de forma performática

=> Há vários métodos de array importante no ES6, este é um deles

*/ 


const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => { // n é cada elemento do array q chamo(loop(n = 1,n = 2...))
    if( n >= 3)
    return n
})

console.log(highNumbers)


// ===================================== //


const users = [
    {nome: 'Matheus', available: true},
    {nome: 'Pedro', available: true},
    {nome: 'João', available: false},
    {nome: 'Marcos', available: false}
]

// como ja tem o boleano fica mais facil para retornar apenas os ususarios disponiveis(true)
const availableUsers = users.filter((user) => user.available)  // por convenção passa a entidade de forma individual como parâmetro

const notAvailable = users.filter((user) => !user.available) // retorna os ñ disponiveis

console.log(availableUsers)
console.log(notAvailable)