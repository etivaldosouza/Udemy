/*
    Programação Assiscrona

=>  Até agora programamos de uma maneira que uma ação acontecia após a outra

=> A programação assincrona trabalha nesta questão, ações podem ser executadas ao tempo todo sem uma fila.

=> Um exemplo: usuário está no checkout de um ecomerce, manda salvar seu endereço na conta, mas pode prosseguir para a finalização sem recarregar a página, pois adicionar endereço ocorre de forma assíncrona.

*/ 


console.log(1)
console.log(2)
setTimeout(function(){
    console.log(3)
},3000)
console.log(4)



async function escreverInformacoesPais(paisDesejado){
    const info =   await fetch("https://restcountries.com/v3.1/name/" + paisDesejado)
    console.log(await info.json())
}

escreverInformacoesPais('brasil')