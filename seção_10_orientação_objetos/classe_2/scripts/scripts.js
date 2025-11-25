/**/ 
class pm {
    constructor(nome,graduacao,id,batalhao){

        this.nome = nome
        this.graduacao = graduacao
        this.id = id
        this.batalhao = batalhao
    }
    mensagem() {
        console.log('Força e Honrra')
    }
}

const pm1 = new pm('Etivaldo','CB','822297','9ºBPM')
const pm2 = new pm('Eduardo','SD','722978','20ºBPM')
const pm3 = new pm('Thiago','CB','823497','13ºBPM')
const pm4 = new pm('Paulo','SGT','812097','BPRVºBPM')
const pm5 = new pm('Roberto','Ten','802297','40ºBPM')


console.log(pm1)
pm1.mensagem()

console.log(pm2)
console.log(pm3)
console.log(pm4)

console.log(pm5)
pm5.mensagem()


//======================================//

const livros = {
    nome: 'React Native',
    editora: 'Casa do Código',
    paginas: 185,
    anunciar: function(){
        console.log(`A Alura indica o livro ${this.nome}!`)
    }
}

livro.anunciar()

//==================================================

class livro {   
    constructor(nome,editora,paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }
    anunciar(){
        console.log(`A Alura indica o livro ${this.nome}!`)
    }
}
    
const livro1 = new livro('React Native','Casa do Código',185)
const livro2 = new livro('Javascript Essencial','Novatec',300)

console.log(livro1)
livro1.anunciar()

console.log(livro2)
livro2.anunciar()
