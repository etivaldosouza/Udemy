/*
    getters e setters

=> São métodos que servem para obter ou colocar valor em um atributo da classe


Dentro de uma classe JavaScripts é possível ter atributos públicos onde todo mundo pode acessar porém podemos ter atributos privados onde só essa classe tem acesso. e para esse caso podemos criar um gett para acessar um valor privado.


Quando Usar:

=> Quando você deseja proteger o acesso a um atributo

=> Quando precisa colocar uma lógica adicional para acessar ou definir um valor

=> Retornar um valor calculado

*/ 


class MinhaClasse {

    constructor(atributoRecebido){
        this.atributo = atributoRecebido
    }

    get obeterAtributo(){
        return this.atributo
    }

    set definirAtributo(valor){
        this.atributo = valor
    }
}

let exemplo = new MinhaClasse('Teste')

console.log(exemplo)

console.log(exemplo.obeterAtributo)

exemplo.definirAtributo = 'Novo Teste'

console.log(exemplo.obeterAtributo)


//==================================================//

// classe sem consrtutor

class Pessoa {

    nome

    get username(){
        return this.nome
    }

    set setNome (nomeDoUsuario){

        if(!nomeDoUsuario) {
            throw new Error('O nome não pode ficar vazio')
        }
        if(this.verificarCaracteresEspeciais(nomeDoUsuario)){
            throw new Error('O nome não pode ter caractere especial')
        }
        this.nome = nomeDoUsuario
    }

    verificarCaracteresEspeciais(str){
        const regex = /[@!#$%^&*()/\\]/
        return  regex.test(str)
    }
}

let pessoa = new Pessoa()

pessoa.setNome = 'Teste@'   // definindo um valor

console.log('Nome:',pessoa.username) // visualizando o valor