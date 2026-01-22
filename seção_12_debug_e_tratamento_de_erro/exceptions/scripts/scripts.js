/*

=>  Podemos criar erros no programa, caso alguma condição não seja atendida.

=> a gente consegue parar o código se a gente prevê que algo q a gente ñ tava querendo receber foi inserido pelo programador ou tb pelo usuário

=>  Porém as exceptions abordam o programa, só geram o erro

*/

let a = 1

if(a != 2){
    throw(`o valor de a não pode ser 1`)
}