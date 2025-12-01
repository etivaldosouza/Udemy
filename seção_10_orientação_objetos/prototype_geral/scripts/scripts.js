/*
    o que é prototype?

=> Todo objeto possui um protótipo (prototype).

=> O protótipo é outro objeto do qual o primeiro herda propriedades e métodos.

=> Pense como um “objeto pai” invisível.


*** Quando você acessa obj.algumaCoisa, o JavaScript:

++ Procura dentro do próprio objeto.

++ Se não achar, procura no prototype.

++ Se não achar no prototype, procura no prototype do prototype... e assim por diante (prototype chain).

obs: (prototype chain == cadeia de prototype)
*/ 



const pessoa = {
    maos: 2
}

// criei um objeto pessoa de forma literal. 

// esse objeto tem uma propriedade própria chamada maos, com valor 2

// internamente, o objeto pessoa também tem um prototype, que você não vê diretamente — mas ele existe.

// Esse prototype padrão é chamado de Object.prototype. 

/*
    ou seja:

=> pessoa herda métodos como:

.toString()

.valueOf()

.hasOwnProperty()

… e vários outros métodos nativos.

*/



console.log(Object.getPrototypeOf(pessoa)) // a função Object.getPrototypeOf(obj) retorna o prototype de obj.


//Então aqui:

// Ele retorna o protótipo do objeto pessoa.
// E como pessoa foi criado como objeto literal {}, seu protótipo é:

// Object.prototype


/*
    Entendimento importante

=>  Mesmo que você não defina nenhum prototype manualmente, todo objeto tem um prototype. 
Isso faz parte do funcionamento da linguagem.

=> Você só vai perceber a existência dele quando usa algo como:

Object.getPrototypeOf(obj)

obj.__proto__ (não recomendado, mas funciona)

Ou quando cria funções construtoras com Construtor.prototype.

*/ 




//===================================== mais sobre prototypes: ==================================================//


// Objetos simples → Prototype padrão( Quando você cria um objeto literal):

    
const pessoa = { maos: 2 }

//O prototype dele é Object.prototype.(vai herdar todos os métodos de Object)

// Podemos visualizar:

console.log(Object.getPrototypeOf(pessoa)) 





//================= Função Construtora + Prototype ==================================//


// Vamos criar uma função construtora:


function Pessoa(nome) {
    this.nome = nome
}

//qundo crio um objeto:


const p1 = new Pessoa("João")

/*
    o que acontece:

=> p1 recebe a propriedade própria:
    → p1.nome = "João"

=> p1 herda métodos do objeto:
→ Pessoa.prototype vira o prototype de p1

*/ 

// Agora vamos colocar um método no prototype:

Pessoa.prototype.falar = function() {
    console.log(this.nome + " está falando")
}

p1.falar()  // João está falando


/*
    Observe:

p1 não tem a função falar dentro dele.

Mas ela é encontrada no prototype de p1.


p1 → { nome: "João" }
p1.__proto__ → Pessoa.prototype

Pessoa.prototype → { falar: f }
Pessoa.prototype.__proto__ → Object.prototype

*/ 


/*
    Entendendo a Prototype Chain(cadeia de prototipos)

    O JavaScript busca assim:

=>  Existe falar dentro de p1?

    ❌ Não.

=>  Então procura dentro do prototype de p1 → Pessoa.prototype

    ✔️ Encontrou!

=>  Se não tivesse encontrado, ele iria subir mais um nível:

=>  Pessoa.prototype.__proto__ → Object.prototype

=>  Se ainda não achasse:

Iria até null
(fim da chain)


*/ 





//==================== outros exemplos com comentários: ============================================================//


// função construtora

function pessoa(nomeDaPessoa,idadeDaPessoa){
    this.nome = nomeDaPessoa
    this.idade = idadeDaPessoa
}


// Método herdado por todas as Pessoas
pessoa.prototype.falar = function(){
    console.log(this.nome + ' está falando')
}

pessoa.prototype.aniversario = function(){
    this.idade++
}

// Criando objetos
const pess1 = new pessoa('Etivaldo',40)

const pess2 = new pessoa('João',42)

console.log(pess1)
pess1.falar()


// Usando os métodos herdados
pess1.aniversario()         // aumenta um ano
console.log(pess1.idade)

console.log(pess2)
pess2.falar()
pess2.aniversario()
pess2.aniversario()
console.log(pess2.idade)


/*
    Por que usar o prototype?

=>  Se você criar métodos dentro da função, assim:
*/ 

function Pessoa(nomeDaPessoa){

    this.nome = nomeDaPessoa
    this.falar = function(){
        console.log('Olá')
    }
} 
//O método falar será duplicado em cada objeto criado.

const p1 = new Pessoa('Pedro')
console.log(p1)
p1.falar()

const p2 = new Pessoa('Ana')
console.log(p2)
p2.falar()



//Com o prototype:

Pessoa.prototype.falar = function() {}

/*
=> O método existe somente uma vez.

=> Todos os objetos criados com new Pessoa() apontam para o mesmo método.

=> Isso economiza memória e deixa o programa mais eficiente.

*/ 


function Pessoa(nomeDaPessoa){

    this.nome = nomeDaPessoa
    
}

Pessoa.prototype.falar = function(){
    console.log('Olá')
}

const pes1 = new Pessoa('Roberto')
const pes2 = new Pessoa('Roberta')

console.log(pes1)
pes1.falar()

console.log(pes2)
pes2.falar()



//========================= Resumindo ===================================================//


/*

    Quando o método está dentro da função construtora

*/ 

function Pessoa(nome) {

    this.nome = nome

    this.falar = function() {       // método falar             
        console.log(this.nome + " está falando")
    }
}

const p_1 = new Pessoa("Ana")
const p_2 = new Pessoa("Carlos")



/*
    Aqui, cada vez que você cria uma pessoa, acontece isto:

=>  É criada uma nova cópia da função falar

=>  Essa cópia é guardada dentro do objeto (p1, p2, etc.)

Visualmente:

*/

p_1 = {
    nome: "Ana",
    falar: function() { ... }  // <- CÓPIA 1
}

p_2 = {
    nome: "Carlos",
    falar: function() { ... } // <- CÓPIA 2
}

/*
    
Ou seja:

=>  p_1.falar é uma função

=>  p_2.falar é outra função, diferente!

    "Mesmo que tenha o mesmo código, são duas funções ocupando memória separada."

*/


/*
    E por que isso economiza memória?

Imagine criar 10.000 usuários.

❌ Se o método estiver dentro da função:

10.000 cópias da mesma função

10.000 funções iguais ocupando memória


✔ Com prototype:

Apenas UMA função armazenada

10.000 objetos usando a mesma referência

Isso economiza:

memória RAM

tempo de criação de objetos

processamento do garbage collector


*/ 