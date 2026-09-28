const user = {
    name: "Theo",
    sayUserName() {
        // função dentro do objeto(método)
        setTimeout(function () {
            // essa função anonima  tem a perda do this(perde o escopo do pai q é name) // o this da funçao aqui é window
            console.log(this);
            console.log("Username: " + this.name);
        }, 500);
    },
};

user.sayUserName();

//  para resolver o caso acima - maneira 1:

const users = {
    name: "Theo",
    sayUserName() {
        var self = this; //*
        setTimeout(function () {
            console.log(self);
            console.log("Username: " + self.name); //*
        }, 500);
    },
};

users.sayUserName();

//================================

// maneira 3 com arrow function: faz com que o this seja realmente o elemento pai do cara q no caso aqui é o objeto name.

const Users = {
    name: "Theo",
    sayUserName() {
        setTimeout(() => {
            console.log(this);
            console.log("Username: " + this.name); //*
        }, 500);
    },
};

Users.sayUserName();

// =======================================

const usuario = {
    nome: "Etivaldo",

    informarNome() {
        setTimeout(function () {
            console.log(this);
            console.log("Nome do Usuário:", this.nome);
        });
    },
};

usuario.informarNome();

//==============================

const usuar = {
    nome: "Etivaldo",
    infName(){
        setTimeout(() => {
            console.log(this)
            console.log('nomeUsers:' , this.nome)
        },3000)

    }
}

usuar.infName()


/*
 com arrow function o this passa ser realmente o elemento pai de fato e não o window.


*/ 