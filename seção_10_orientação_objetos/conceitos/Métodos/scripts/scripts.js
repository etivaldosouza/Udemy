/*
    Métodos:

=> Propriedades que servem como funções, ou seja, dados cujo valor é uma função.

=> posso dizer também que são as ações dos objetos

=> Invocamos os métodos da mesma maneira que as funções

*/ 


let cachorro = {            //objeto cachorro
latir: function(){          //método latir
        return 'Au Au...'
    }
}

console.log(cachorro.latir())


//================================================================//


const cachorro = {
    uivar: function(){
        console.log('Auuuuu..')

    },
    rosnar: function(){
        console.log('Ruuuu...')
    }
}

cachorro.uivar()
cachorro.rosnar()