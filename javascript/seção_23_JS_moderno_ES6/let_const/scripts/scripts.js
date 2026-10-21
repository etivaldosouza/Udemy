/*
    Váriáveis com let e const

=> Temos duas novas formas de declarar variáveis no ES6¨

=> A let que é semelhante ao var, podemos alterar valores

=> E a const, que é uma forma de declarar constantes;

=> O grande diferencial é o escopo de blocos, não temos mais variáveis sendo vazadas para outros escopos por causa do mesmo nome.

=> vamos ver na prática


*/ 

function vari(a,b){
    a = 2
    b = 3
    return a + b
}

console.log(vari())

let a = 4


let b = 1

console.log(a+b)