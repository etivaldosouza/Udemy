/*
    Estilizando com JS:

=>  Podemos também mudar as propriedades de estilo dos elementos do HTML com o JS

=> Acessando a propriedade style podemos fazer as modificações

=> O estilo é manipulado direto na tag, ou seja, substitui o do CSS(na maioria das vezes)

*/ 


let elemento = document.querySelector('#titulo-principal')

console.log(elemento.style)

elemento.style.fontSize = '80px'

setTimeout(() => {
   elemento.style.color = 'blue'; 
   elemento.style.backgroundColor =  'yellow'
   elemento.style.width = '400px'
   elemento.style.textAlign = 'center'
}, 3000);






