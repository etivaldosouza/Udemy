/*
    loop em Arrays

=> Uma técnica muito utilizada na programação é o loop nos arrays;

=> Como é uma lista com muitos valores, muitas vezes precisamos ver cada um deles;

*/ 

let numeros = [1,5,10,15,20,25]

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

//====================================//

let nomes = ["Matheus","Maria","José"]
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

//=======================================//

// utilizando o while:


let nomes = ["Matheus","Maria","José"]

let i = 0
while(i < nomes.length){
    console.log(nomes[i])
    i = i+1
}