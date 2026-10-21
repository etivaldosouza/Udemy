/*
    Spread operator(operador de espalhamento)

=> Pode ser utilizado também em arrays e objeto

=> Utilizamos para construir novos valores destes dados em outros arrays e objetos

=> Ou seja, podemos unir vários arrays de maneira simples ou adicionar valores de um objeto a outro, por exemplo;


*/ 

// com array

const a1 = [1,2,3]
const a2 =  [4,5,6]

const a3 = [...a1,...a2]

console.log(a3)

const a4 = [0,...a1,4]
console.log(a4)
console.log(...a4)


// com objeto

const carName = {nome: 'Gol'}
const carBrand = {brand: 'Vw'}
const otherInfos = {km: 1000, price: 49000}

const carCompleto = {...carName,...carBrand,...otherInfos,door: 4}

console.log(carCompleto)