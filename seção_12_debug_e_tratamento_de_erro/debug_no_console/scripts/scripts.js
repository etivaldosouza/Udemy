/*
    Método de debug: console.log

=> Era o método oficial do javaScript para debug.

=> Um método bastante utilizada para debug é o console.log

*/ 

let a = 1

let b = 2

let c = 3

if(c > a) {
    a = b
    console.log(a)
}

for(let i = 5; i > 0; i--){
    b++
    a = a + c + 1                 
    c+= 2
    console.log('a:',a)
    console.log('b:',b)
}

if(b == a){
    a++
}else{
    a = a + b + c
}

console.log(a)

a = a * b

console.log(a)
