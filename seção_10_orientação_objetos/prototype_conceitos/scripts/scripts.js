/*
 prototype 
 
=>  serve para quando queremos adicionar uma propriedade ou um método ao objeto, principalmente se for objeto de função. 

*/

const nave = function(p1) {
    this.energia = p1
    this.disparos = 3
}


nave.prototype.vidas = 3

nave.prototype.disparar = function(){

    if(this.disparos > 0){
        this.disparos--
        console.log('disparo realizado')
    }else{
        console.log('sem munição')
    }
}

const n1 = new nave(30)

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()



console.log(nave)

console.log(n1)
console.log(n1.energia)
console.log(n1.vidas)
console.log(n1.disparos)



