/*
    Função AutoExecutavel

=> é usada para evitar conflitos de nomes por exempplo de um funcao de uma biblioteca que esteja sendo usada.
*/ 


(function AutoExecutavel(){
    console.log('olá mundo')
}())


//================================================//


(function escreverMsg(a){
    return a
}(console.log('olá mundo')))