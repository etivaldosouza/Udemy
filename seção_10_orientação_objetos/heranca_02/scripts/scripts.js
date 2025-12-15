/*
    Herança:


    O que é:

=> Possibilita uma classe obter atributos e métodos de outra classe

    Quando Usar: 

=> Quando tiver objetos com códigos semelhantes

    Quando não usar:

=>  Não fazer herança com muitos níveis, pode deixar o código complexo

=> Projetos muito pequeno


*/ 

/*
    Como Utilizar:

    classe Base {

        constructor(atributoRecebido){

            this.atributo = atributoRecebido
        }
    }

    class MinhaBase extends Base {

        constructor(atributo,textoRecebido){

            super(atributo)  // propriedade da classe pai

            this.texo = textoRecebido // propriedade propria
        }
        função() {
            console.log(`this.atributo: Teste`)
        }

    }

    let exemplo = new MinhaBase("teste1", "Teste2")

    exemplo.funcao()

*/


class Mamifero {
    constructor(patasDoMamifero){
        this.patas = patasDoMamifero
    }
}

let gato = new Mamifero(4)

console.log(gato.patas)

class Cachorro extends Mamifero{
    constructor(patasDoMamifero,racaDoCachorro){
        super(patasDoMamifero)
        this.raca =  racaDoCachorro
    }
}

let poodle = new Cachorro(4,'Poodle')
console.log(poodle)

let pastor = new Cachorro(4,'Pastor Alemão')
console.log(pastor)





//==========================================================//




class pessoa {
    constructor(nome,telefone,email){
        this.nome = nome 
        this.telefone = telefone
        this.email = email
    }

    falar(){
        console.log(`${this.nome} está falando`)  
    }
    andar(){
        console.log(`${this.nome} está andando`)
    }
}

class PessoaFisica extends pessoa {
    constructor(nome,telefone,email,cpf){
        super(nome,telefone,email,cpf) // atributos da classe pai
        this.cpf = cpf                   //atributos dessa classe
    }
}


class PessoaJuridica extends pessoa {
    constructor(nome,telefone,email,cnpj){
        super(nome,telefone,email,cnpj) // atributos da classe pai
        this.cnpj = cnpj                   //atributos dessa classe
    }

    pagarSalario(){
        console.log(`${this.nome} Pagou o Salário`)
    }
}

let pf1 = new PessoaFisica('Etivaldo','(98)98198-6302','etivaldosouza@hotmail.com','04762847402')

let pf2 = new PessoaFisica('Roberto','(98)98190-6203','robertosouza@hotmail.com','0576249702')


console.log(pf1)
pf1.falar()
pf1.andar()

console.log(pf2)
pf2.andar()
pf2.falar()



console.log(pf1.nome,pf1.cpf)
console.log(pf2.nome)

let pj1 = new PessoaJuridica('Display','(98)98187-8948','displayinfo@hotmail.com','69345/0001-89')

console.log(pj1)
pj1.pagarSalario()

let pj2 = new PessoaJuridica('KF Emprestimos','(98)3237-5598','kfempprestimos@gmail.com','54097/0001-34')
console.log(pj2)

pj2.pagarSalario()

pj2.andar()