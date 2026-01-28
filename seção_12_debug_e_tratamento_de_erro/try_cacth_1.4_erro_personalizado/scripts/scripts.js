function verifica(){
    try{
        let input = document.querySelector('#campo')

        if(!input){   // se o input ñ existir
            throw new Error('Campo ñ encontrado')
        }

        let valor = Number(input.value.trim())
        if(isNaN(valor)){
            throw new Error('Informe apenas números')
        }
        else if(valor === ' ' || valor > 10){
            throw new Error('Informe um valor entre 0 e 10')
        }
    alert(`vc digitou ${valor}`)    
    }catch(e){
        alert(e)
    }

}


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
