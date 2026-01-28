function inputar(n){
    let don = document.querySelector('#campo')
    try{
        if(n > 10){
            throw new Error('Valor inválido')
        }
    }catch(e){
        alert(`Erro: ${e}`)
    }
}


