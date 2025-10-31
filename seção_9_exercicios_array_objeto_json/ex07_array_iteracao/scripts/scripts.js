/*

=> crie um array com 5 elementos

=> Faça uma iteração entre todos eles e imprima no console o valor

*/


let arr = [1,2,3,4,5]

for(let i = 0; i < arr.length;i++){
    console.log(`${i} corresponde a ${arr[i]}`)
}


//================= utilizando a nossa ordem =======================//


let arr = [1,2,3,4,5]

for(let i = 0; i < arr.length;i++){
console.log(`${i+1}º corresponde a ${arr[i]}`)
}


//=========== Iterando Com map ====================//


let arr = [1,2,3,4,5]

arr.map(num => console.log(num)) 


//============ com forEarch =========================//

let arr = [1,2,3,4,5]

arr.forEach(num => console.log(num))


//a diferença do map para o forEach é que no map retorna um array


let frutas = ['Maçã', 'Pêra','Goiaba']

console.log(frutas.map(fruta => fruta))

//============================================//

let frutas = ['Maçã', 'Pêra','Goiaba']

frutas.map((fruta) => {
    console.log(fruta)
})