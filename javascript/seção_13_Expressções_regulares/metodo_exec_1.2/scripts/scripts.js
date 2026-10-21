/*
    Exemplo 1 – Uso básico

*/ 

let regex = /banana/
let texto = 'Eu gosto de banana'

let resultado = regex.exec(texto)

console.log(resultado)

//===============================================//

let reg = /(\d{2})\/(\d{2})\/(\d{4})/

let txt = 'Hj é o dia 13/02/2026'

let res = reg.exec(txt)

console.log(res)

