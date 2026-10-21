/*
    Utilizando o botao direito

=> Podemos utilizar o click do mouse utilizando o botao direito sem ativar o default(quando clica com o botao direito do mouse por padrão abre um menu):

                      
*/ 

let btn = document.querySelector('#butao')

btn.addEventListener('contextmenu',function msg(e){
    e.preventDefault()  // impede que o menu(quando clica com o direito) apareça(impede o evento padrão de ocorrer)
    alert('VC CLICOU COM O BOTAO DIREITO')
    console.log(e) // mostra o obejeto do evento
})