/*
    metodo call:

=> assim como o new, é outro metodo para alterar o this

 com o call o 1º parametro é o this e os demais são os parâmetros que vc vai utilizar na function

*/ 

function personagem(){
    console.log(this) 
}

personagem()// vai retornar o this e nesse caso o this é o objeto window



// usando o call p/ alterar o this.

function personagem(){
    console.log(this) 
}

let personagemUsuario = {
    nome : 'Homem Aranha'
}

 personagem.call(personagemUsuario) // com o call eu to dizendo que o objeto this agora é o persongemUsuario.


//=================================================== 

/*

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



//=============== exemplo 2 ===============================//

function personagem(p1,p2,p3){
    console.log(p1,p2,p3)
    console.log(this) 
}

let personagemUsuario = {
    nome : 'Homem Aranha'
}

 personagem.call(personagemUsuario,'Batman','Chapolin',1971) 


/*
     O que o .call() faz de verdade

=> O método .call() chama uma função e permite definir o que será o this dentro dela.

👉 Ou seja, você pode “emprestar” uma função de um objeto e usá-la em outro, mudando o contexto (this).

    Exemplo prático 1 – Reutilizar métodos entre objetos:

*/  

function apresentar() {
  console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.profissao}.`);
}

const pessoa1 = {
  nome: 'Peter Parker',
  profissao: 'fotógrafo'
};

const pessoa2 = {
  nome: 'Tony Stark',
  profissao: 'engenheiro'
};

// Usando o método call:
apresentar.call(pessoa1); // Olá, meu nome é Peter Parker e eu sou um fotógrafo.
apresentar.call(pessoa2); // Olá, meu nome é Tony Stark e eu sou um engenheiro.



function militares(){
    return Object.values(this).map(militar)
}

let pms = [

    mike1 = {
        nome: 'etivaldo',
        graduação: 'Cabo',
        id: 822297,
        unidade: '9ºBPM'
    },
    mike2 = {
        nome: 'Rodrigues',
        graduação: 'Soldado',
        id: 822397,
        unidade: '9ºBPM'
    },
    mike3 = {
        nome: 'Rafael',
        graduação: 'Sargento',
        id: 823490,
        unidade: '20ºBPM'
    },
    mike4 = {
        nome: 'Carlos',
        graduação: 'Tenente',
        id: 802298,
        unidade: '40ºBPM'
    },
]


console.log(militares.call(pms))