/*
    Criando Elemento:

=>  Podemos criar um nó de elemento com o creatElemet, e depois inserir no HTML.

*/ 

let lista = document.createElement('ul')

for(i = 0; i < 5; i++){
    let item = document.createElement('li')
    let texto = document.createTextNode(`texto lista ${i}`)
    item.appendChild(texto)
    lista.appendChild(item)
}


let posicaoLista = document.querySelector('#container-principal')

posicaoLista.appendChild(lista)







