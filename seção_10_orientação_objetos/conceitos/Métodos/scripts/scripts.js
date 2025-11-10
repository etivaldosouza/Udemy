/*
    Métodos:

=> dados cujo valor é uma função.

=> Propriedades que servem como funções

=> posso dizer também que métodos são as ações dos objetos

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




//================================================================================//


/*
    Mais sobre Métodos:

=> Normalmente os métodos interagem com os objetos

=> Até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido

*/ 

let pessoa = {

    nome: '',

    setNome: function(novoNome){  // propriedade que determina o nome
        this.nome = novoNome    
    },
    getNome: function(){ // propriedade que mostra o nome
        return this.nome
    }
}

pessoa.setNome('Etivaldo')

console.log(pessoa.getNome())

//===============================================================================//

const cachorro = {

    raca: 'SRD',
    uivar: function(){
        console.log('Auuuuuu')
    },
    rosnar: function(){
        console.log('ruuuuuu')
    },
    setRaca: function(marca){
        this.raca = marca     // o this é uma referencia ao proprio objeto( é a mesma coisa que cachorro.raca)
    },

    getRaca: function(){            
        return `a raca é ${this.raca}`
    }
}


cachorro.setRaca('Pastor Alemão')

console.log(cachorro.getRaca())

console.log('================')

cachorro.setRaca('Rotwailer')
console.log(cachorro.getRaca())

console.log('================')

cachorro.setRaca('Poodle')   
console.log(cachorro.getRaca())
