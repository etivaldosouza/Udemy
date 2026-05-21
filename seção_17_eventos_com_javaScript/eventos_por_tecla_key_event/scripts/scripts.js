/*
    Eventos de tecla(key event)

=> Sempre que uma tecla é precionada,são gerados dois eventos:

=> Podemos realizar ações nestes eventos também

=> keyup é quando soltamos a tecla

=> keydown é quando apertamos     
                               
*/ 


 

window.addEventListener('keydown',function(e){
    if(e.key === 'a','b','c','d'){
        console.log(`vc apertou a tecla ${e.key}`)        
    }
})

window.addEventListener('keyup',function(e){
    if(e.key === 'a','b','c','d')
    console.log(`soltou a tecla ${e.key}`)
    
})
