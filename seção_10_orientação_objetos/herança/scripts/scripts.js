/*
    Herança

=> Uma classe pode herdar propriedades e métodos de outra classe por herança.

=> para isso utilizamos extends

=> é quando eu quero usar além das propriedades da classe pai criar outras propriedades.

*/ 

// classe pai (super classe)

class Mamifero {

    constructor(patasDoMamifero,corDoMamifero){
        this.patas = patasDoMamifero
        this.cor = corDoMamifero
    }

}

/*
Cria a classe Cachorro e diz que ela herda (extends) tudo da classe Mamifero.
Ou seja, Cachorro também terá patas e cor, pois Mamifero tem.
*/
class Cachorro extends Mamifero {

    constructor(patas,cor,racaDoCachorro){
        super(patas,cor)                 //  propriedades da classe pai 
        this.raca = racaDoCachorro
    }
}

let poodle = new Cachorro(4,'Amerelo','poodle')

console.log(poodle)


/*
    Mas o que super() faz?

=> Ele chama o constructor da classe pai (Mamifero).

Então ele executa:

    => this.patas = patasDoMamifero
    => this.cor = corDoMamifero

ou seja:

    => Todo cachorro automaticamente já recebe o atributo patas e o atributo cor.


Criando o atributo exclusivo da classe Cachorro:

=> this.raca = racaDoCachorro ( Adiciona a propriedade raca ao objeto Cachorro.)

Cachorro agora tem:

=> patas  (herdado do Mamifero)
=> cor  (herdado do Mamifero)

=> raca (exclusivo dele)


Criando um objeto (instância):

let poodle = new Cachorro(4,'poodle')

isso faz:

=>  Chamar constructor(4,'amarelo' ,'poodle')

=>  Executar super(4) → define this.patas = 4

=> Executar super(amarelo) -> define this.cor = amarelo

=>  Define this.raca = 'poodle'

*/ 