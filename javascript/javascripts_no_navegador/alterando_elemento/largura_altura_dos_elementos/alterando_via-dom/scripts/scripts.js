/*
    Verificando altura e largura do elemento:

=>  Com o JS também é possível verificar propriedades do elemento como altura e largura, veja:


obs: 

.offsetWidth => considera a borda do elemento
.offsetHeight => considera a borda do elemento


.clientWidth => desconsidera borda
.clientHeight => desconsidera borda

*/ 


let elemento = document.querySelector('#titulo-principal')

console.log('Largura: '+ elemento.offsetWidth) // verificar a largura do elemento considerando borda
console.log('Altura: '+ elemento.offsetHeight) // verifica a altura do elemento considerando borda

console.log('Largura: '+elemento.clientWidth) // desconsidera borda
console.log('Altura: ' + elemento.clientHeight)


