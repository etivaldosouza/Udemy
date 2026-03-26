/*
    Generators

=>  Generators Funcionam semelhantes as Promises

=> onde ações podem ser pausadas e continuadas depois

=> Caracterizados pelo function* e yield, veja:

=> O Yield pode salvar o estado da vriável

*/ 



function* genTests(){
    let id = 0
    while(true){
        yield id++
    }
}

let criarIds = genTests()

console.log(criarIds.next().value)
console.log(criarIds.next().value)
console.log(criarIds.next().value)



//============================================================//


function* genTest(){
    let id = 0
    while(id <= 50){
        yield id++
    }
}

let criarId = genTest()

for(let i of criarId){
    console.log(i)
}


