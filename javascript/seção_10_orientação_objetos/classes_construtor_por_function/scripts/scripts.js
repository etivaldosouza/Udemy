/*
    
    classes: construtor por função


=> construtores são formas de instanciar uma classe em uma linguagem de programação;

=> instanciar = criar um objeto novo

=> no construtor ja podemos definir propriedades


*/ 

//==================== instância por função: ======================================//

function criarCachorro(racaDoCachorro){ // parâmetro que vou receber
    let cachorro = Object.create({}) // criando um objeto
    cachorro.raca = racaDoCachorro    //(cachorro.raca é a propriedade(raca) que estou criando e que vai receber como valor o cachorro que vou informar)
    cachorro.latir = function(){
        console.log('AuAuAu!!!')
    }
    return cachorro             // retorna um objeto cachorro com a propriedade raca dentro
}


let doberman = criarCachorro("Doberman")

console.log(doberman)
doberman.latir()


/*
    construtor nada mais é que instanciar um objeto já com algumas propriedades definidas ou definindo algumas propriedades

*/
//==========================================================================================//

function criarCachorros(racaDoCachorro,patasDoCachorro,corDoCachorro){

    let cachorro = Object.create({}) //crio o objeto cachorro vazio
    
    //crio as propriedades para o objeto cachoro
    cachorro.raca = racaDoCachorro 
    cachorro.patas = patasDoCachorro
    cachorro.cor = corDoCachorro
    return cachorro
}


let pastor = criarCachorros('pastor',4,'amarelo') 

let Doberman = criarCachorros('doberman',4,'preto')

console.log(pastor)
console.log(Doberman)