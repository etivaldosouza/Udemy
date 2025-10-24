/*
    getters e setters

*/ 

var usuarios = [
    {
    nome: 'Ayrton',
    idade: 26
    },

    {
        nome: 'João',
        idade: 19
    },

    {
        nome: 'Maria',
        idade: 21
    }
]

console.log(usuarios)

console.log(usuarios[1])

console.log(usuarios[1].nome)

console.log(usuarios[2].nome)





//===================================================================//



var usuarios = [
    {
        nome: 'Ayrton',
        idade: 26
    },

    {
        nome: 'João',
        idade: 19
    },

    {
        nome: 'Maria',
        idade: 21
    }
]

var usuario = {

    posicao: 0,

     get atual() {
        return usuarios[this.posicao]
     },

     set atual(novaPosicao) {    // quando quero especificar(definir um valor) qual vai ser meu 'atual' 
        this.posicao = novaPosicao
     }, 

    proximo() {
        ++this.posicao   // incrementando a posição. o this serve para referenciar o próprio objeto que no caso é o usuario
    },

    anterior() {
        --this.posicao
    }

}

console.log(usuario.atual)

usuario.proximo()

console.log(usuario.atual)

usuario.proximo()

console.log(usuario.atual)

usuario.anterior()
console.log(usuario.atual)

usuario.atual = 0    
console.log(usuario.atual)


usuario.atual = 2
console.log(usuario.atual)



//======================================================//

var nomes = {
    listaNomes: ['ADS', 'JS']
}

var nome = {
    primeiro: 'ADS', 
    
    // Getter para 'primeiroNome'
    get primeiroNome() {
        // Retorna o valor da propriedade subjacente
        return this.primeiro; 
    },
    
    // Setter para 'primeiroNome'
    set primeiroNome(novoNome) {
        // Altera o valor da propriedade subjacente
        this.primeiro = novoNome;
        
        // OPCIONAL: Se você quisesse atualizar a listaNomes também:
         nomes.listaNomes[0] = novoNome; 
    }
}

console.log(nome.primeiroNome)

nome.primeiroNome = 'PHP'

console.log(nome.primeiroNome)

console.log(nomes.listaNomes)


//=====================================================================//

var pessoa = {
    nome: 'Etivaldo',
    sobreNome: 'Souza',

    get nomeCompleto(){
        return `${this.nome} ${this.sobreNome}`
    },
    set nomeCompleto(novoNome){
        const partes = novoNome.split(' ')
        if(partes.length >= 2){
            this.primeiroNome = partes[0]
            this.sobreNome = partes.slice(1).join('')
        }else {
            console.warn("Aviso: Formato de nome incompleto. Use 'Nome Sobrenome'.");
        }
    }   
}

console.log(pessoa.nomeCompleto)

pessoa.nomeCompleto = 'Karine Souza'

console.log(pessoa.primeiroNome,pessoa.sobreNome)