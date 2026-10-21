let botao = document.querySelector('#btn')
botao.addEventListener('click',verifica)

function verifica(){
    
    let msg = document.querySelector('#mensagemErro')
    let input = document.querySelector('#campo')
    msg.textContent = ''// limpa erro anterior
    
    try{
        
        if(!input){   // se o input ñ existir
            throw new Error('Campo ñ encontrado')
        }

        let valor = input.value.trim() // Se o usuário digitar só espaços ele vai reconhecer como algo dentro
        if(valor === '     '.trim()){ // ñ considera os espaços como valor
            throw new Error('O campo está vazio')
        } 
        let valorTratado = Number(valor)
        
        if(isNaN(valorTratado)){
            throw new Error('Informe apenas números')
        }
        else if(valor < 0 || valor > 10 ){
            throw new Error('Informe um valor entre 0 e 10')
        }
        
    msg.style.color = 'green'
    msg.textContent = `Tudo certo! Você digitou ${valor}`
    input.value = ""  

    }catch(e){
        
        msg.style.color = 'red'
        msg.textContent = e.message
        
    }
}

/*

erro comum:

let valor = Number(input.value.trim()) 

Então valor  é número, nunca mais será string.

👉 valor === '' sempre será false pq:

false === 0

true === 1
false === 0

então primeiro a gente trata a string



acima se o usuario diexar vazio('') ele ta transformando o vazio em um numero


    Se o usuário digitar só espaços:

    [espaço][espaço][espaço]
    
O valor não é vazio:

valor = "   "

E JS entende isso como string com conteúdo, então:

valor === ""   → false



Ou seja…

🚨 O sistema acha que foi digitado algo válido, mas na prática está vazio.


Resultado do bug

O código continua:

let numero = Number(valor)


E adivinha?

Number("   ") → 0




😱😱😱

O sistema entende que o usuário digitou zero.
*/ 
/*
    Regra prática

Sempre que você pegar algo do HTML:

let elemento = document.querySelector(...)


vale usar:

if (!elemento) {
    o elemento não foi encontrado
"Se NÃO existir input"
ou
"Se input for falso"


}


*/
