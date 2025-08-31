/*

=>  Escreva uma função que receba uma string
=>  se o texto contiver mais de 10 caracteres, imprima "texto muito longo"

=> se contiver menos, imprima "texto dentro do limite"
*/ 

function checarTamanhoTexto(txt){

    let qtde = txt.replace(/\s/g, "").length 

    if(qtde >= 10){

        console.log(`o texto: ${txt} contém ${qtde} caracteres: texto muito longo`)

    }else{
        console.log(`o texto: ${txt} contém ${qtde} caracteres, texto dentro do limite`)
    }
}


checarTamanhoTexto('olá, mundo  !')
checarTamanhoTexto("oi mundo")



// txt.replace(/\s/g, "") retira todos os espaços antes da contagem  