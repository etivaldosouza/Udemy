/*

=>  Escreva uma função que detecta o tipo de dado passado

=>  verifique se é um: number,boolean ou string

=> e retorne uma mensagem para cada tipo

=> execute uma função para cada

*/ 


function verificarTipo(x){
console.log(`esse dado é do tipo ${typeof(x)}`)
}

verificarTipo('eduardo')
verificarTipo('')

verificarTipo(5)
verificarTipo(0)
verificarTipo(NaN) //number

verificarTipo(null) //objeto

verificarTipo(undefined) // underfined

verificarTipo(true)
verificarTipo(false)


