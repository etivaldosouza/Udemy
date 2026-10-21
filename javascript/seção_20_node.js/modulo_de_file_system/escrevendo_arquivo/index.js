/*
    File system: escrevendo

=> Além de ler aquivo, podemos tambem alterar o mesmo,

=> Chamamos isso de escrver no arquivo; 

*/ 


let {redFile,writeFile} = require('fs') 


readFile('arquivo.txt','utf-8',(error,texto) => {
    if(error){
        throw error
    }else{
        console.log(texto)
    }
})

writeFile('arquivo.txt','Texto por write file',(error) => {
    if (error) {
        throw error
    } else {
        console.log('Escreveu com sucesso')
    }
})