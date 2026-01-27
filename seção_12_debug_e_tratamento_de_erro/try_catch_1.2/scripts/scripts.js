function dividir(n1,n2){

    try{
        let res = n1/n2
        console.log(res)
    }catch(e){
        alert(e.message)      
    }    
    alert('teste') // se tiver dentro do finally será executado normalmente
    
}

dividir(8,neto)
