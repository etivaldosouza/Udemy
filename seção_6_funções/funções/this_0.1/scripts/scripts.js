
this.name = 'valeska'

function dizerMeuNome(){   
    console.log(this.name) // ñ pega o escopo global
}

dizerMeuNome()



//==============================================================//


this.name = 'João'

const develop = {

    name: 'Claiton',
    falarMeuNome: function(){       //contexto do método
        console.log(this.name)
    }
}

develop.falarMeuNome()



//=================            metodo call               ============================================//


/*
    agora se eu quero trazer a variavel global para dentro do escopo local.
    ou seja, quando tenho a necessidade de trazer o this p/ dentro de alguma coisa.
    utilizo o metodo call

    se eu tenho uma fuction eu aplico o call nela e mando lá pra dentro o this e os argumentos da função => function.call(this, arg1,arg2)

    call, do inglês chamar, sempre retorna o this do escopo do contexto anterior(contexto q eu enviar)
    

*/ 


this.name = 'Camila'

function sayMayName(){
    
    console.log(this.name)
}

const dev = {

    name: 'Isabela'
}

sayMayName.call(this)

sayMayName.call(dev)



//=======================================================//

this.nome = 'Etivaldo'


function imprimeNome(idade,cidade){
    this.idade = idade
    this.cidade = cidade
    console.log(`${this.nome}, ${this.idade} anos, cidade: ${this.cidade}`)
}

const devNome = {
    nome: 'Pedro'
}


imprimeNome.call(this,20,'Recife') // levando o escopo global para dentro do escopo da funcao.


imprimeNome.call(devNome,40,'São Luís')

console.log(this.idade)
console.log(devNome.idade)



//================================= Metodo apply  =================================================//

/*

=> muito parecido com o call porém ele recebe um array de argumentos como parâmetro

=> function.apply (this,[arg1,arg2])

*/ 


this.name = 'Camila'
this.linguagem = 'Python'

function sayMayName(linguagem){
    this.linguagem = linguagem
    console.log(this.name,this.linguagem)
}

const deveNome = {

    name: 'Isabela'
}

sayMayName.apply(this,[this.linguagem]) // puxa as variaveis do escopo global para o escopo da função

sayMayName.apply(deveNome,['JAVA']) 


