// global scope

this.name = 'Etivaldo'

console.log(this.name)


//========================================//

// escopo local:

function dizerMeuNome(){
    console.log(this.name) // vai dá undefined
}

dizerMeuNome()

