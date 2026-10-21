/*
    
    Sistema de Biblioteca

=>  Crie uma classe chamada "Livro" que representa um livro em um sistema de biblioteca.

=>  A classe deve ter os seguintes atributos:

=>  titulo: representando o título do livro (string).

=>  autor: representando o autor do livro (string).

=>  disponivel: representando a disponibilidade do livro (boolean).

    A classe deve ter os seguintes métodos:

=>  emprestar(): verifica se o livro está disponível para empréstimo e, se estiver, atualiza a disponibilidade para false.

=>  devolver(): verifica se o livro não está disponível para empréstimo e, se não estiver, atualiza a disponibilidade para true.

=>  consultarDisponibilidade(): retorna a disponibilidade atual do livro.


*/


class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
        this.disponivel = true
    }

    emprestar() {
        if (this.disponivel === true) {
            this.disponivel = false
            console.log(`O livro "${this.titulo}" emprestado com sucesso.`)
            return
        }       
        console.log(`o livro "${this.titulo}" não está disponível.`)
    }

    devolver() {
        if (this.disponivel === false) {
            this.disponivel = true
            console.log(`O livro "${this.titulo}" devolvido com sucesso.`)            
            return
        }
        console.log('Livro já foi devolvido')
        
        
    }

    consultarDisponibilidade() {
        return this.disponivel
    }
}


const livro1 = new Livro("Dom Casmurro", "Machado de Assis")

console.log(livro1.consultarDisponibilidade()) 


livro1.devolver()

livro1.emprestar()

console.log(livro1.consultarDisponibilidade())

livro1.emprestar()

livro1.devolver()

livro1.devolver()

console.log(livro1.consultarDisponibilidade())




//================== Maneira 2 //==============================


class Livro{
    constructor(titulo,autor,disponivel){

        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel
    }
    emprestar(){
        if(this.disponivel === true ){
            this.disponivel = false
            console.log('Livro emprestado com sucesso')
        } else {
            console.log('Livro não está disponível')
        }
    }
    devolver(){
        if(this.disponivel === false ){
            this.disponivel = true
            console.log('Livro devolvido com sucesso')
        } else {
            console.log('Livro já está disponível')
        }
    }
    consultarDisponibilidade(){
        return this.disponivel
    }
}

let iaParaDev = new Livro('IA para devs','Guanabara',false)

console.log(iaParaDev.consultarDisponibilidade())

iaParaDev.emprestar()

iaParaDev.devolver()

iaParaDev.emprestar()

console.log(iaParaDev.consultarDisponibilidade())





