/*
     metodo invocando com call

 com o call o 1º parametro é o this e os demais são os parâmetros que vc vai utilizar na function

*/ 

function personagem(p1,p2,p3){
    console.log(p1,p2,p3)
    console.log('personagemThis',this)
}

let personagemthis = {         // objeto que vai ser o this da function
    nome: 'Etivaldo',
    idade: 43
}
personagem.call(personagemthis,'param1',123,[5,6,7])

