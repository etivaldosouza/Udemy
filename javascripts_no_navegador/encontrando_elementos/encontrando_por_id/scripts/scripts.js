/*
    Encontrando elementos: por id

=> Utilizamos o seguinte método para encontrar elementos por id:

=> Document.getElementByTagId('algum-id');


*/ 


console.log(document.getElementsByTagName('h1'))



//==========================================================//


let alterarH1 = document.getElementById('titulo-principal')

alterarH1.innerText = 'Encontrando elementos por Id'

