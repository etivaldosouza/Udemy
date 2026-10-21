/*

- Faça uma estrutura if/else para verificar se um usuário pode dirigir;

- Armazene um variável algumas informações sobre o usuário: idade, se tem CNH

- Se a idade for maior que 18 anos e ñ possuir CNH,exiba uma mensagem

- se a idade for maior que 18 anos e tem CNH, exiba uma mensagem

- se ñ tiver 18 anos nem CNH, exiba outra mensagem

*/

let idade = 15

let cnh = false

if(idade >= 18 && cnh == true){
    console.log(`vc tem cnh! pode dirigir`)
}else if(idade < 18){
    console.log(`vc ñ pode ter cnh e ñ pode dirigir`)
}else {
    console.log(`vc ñ possui cnh ñ! pode dirigir`)
}