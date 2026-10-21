/*
    Destructuring    

*/

/*

Com Objeto:

*/

const pessoa = {
    name: "Elton",
    age: 26,
    higth: 1.75,
};

const { name } = pessoa;

console.log(name);

// renomeando propriedades

const pm = {
    name: "Etivaldo",
    age: 43,
};

const { name: nome, age: idade } = pm;

console.log(`O policial chama-se ${nome} e tem ${idade} anos`);

// com variáveis que já existem:

let id;

const policial = {
    nome: "Elton",
    matricula: 2434,
}; //o ponto e virgula aqui é indispensalvel para ñ dá erro

({ matricula: id } = policial);

console.log(id);

//==========================================================//

// array

// dois valores

const frutas = ["banana", "pera", "maçã"];

const [f1, f2] = frutas;
console.log(f1);
console.log(f2);

//==============================

// desconsiderando item(s)

const carr = ["byd", "onix", "ka"];

const [, c1] = carr; // tô pegando a partir do segundo elemento

console.log(c1);

const [, , c] = carr;

console.log(c);

//====================================

// ...rest (siguinificado => 'resto') termo usado convencionalmente, porém pode ser qualquer palavra precedido dos ...

const mikes = ["João", "Pedro", "Carlos", "Karine"];

const [m1, ...rest] = mikes;

console.log(m1);
console.log(...rest);

//==============================================//

const numeros = [10, 20, 30, 50, 100, 150];

const [n1, n2, n5, ...n] = numeros;

console.log(n5, ",", n);

//================================================

// Função

function liquidificador(x) {
    console.log(x);
}

const fruits = {
    f1: "Banana",
    f2: "Pera",
};

liquidificador(fruits);

// selecionando apenas um item especifico:

function liquidificador({ fruta2 }) {
    console.log(fruta2);
}

const frutaS = {
    fruta1: "banana",
    fruta2: "peraa",
};

liquidificador(frutaS);

// ====================================//
// ex: 2 com funcoes selecionando um item e todos.

function policial({ id2 }) {
    console.log(id2);
}

function imprimePms(x) {
    console.log(x);
}

const pms = {
    id1: {
        numero: 2412278,
        nome: "Etivaldo",
    },
    id2: {
        numero: 2435543,
        nome: "José",
    },
    id3: {
        numero: 254356,
        nome: "Paulo",
    },
};

policial(pms);

imprimePms(pms);



// ===================================================================//

listaCompras = {
    prod1: {
        nome: "Queijo",
        valor: 50,
        categoria: "Alimento",
    },

    prod2: {
        nome: "Carne",
        valor: 70,
        categoria: "Alimento",
    },

    prod3: {
        nome: "Sabonete",
        valor: 10,
        categoria: "Higiene",
    },

    prod4: {
        nome: "Shampoo",
        valor: 20,
        categoria: "Higiene",
    },
};

function prodEspecifico({ prod2 }) {
    console.log(prod2.nome);
}

function imprimeTudo(x){
    console.log(x)

}

imprimeTudo(listaCompras)

prodEspecifico(listaCompras);





// =======================================

function liquidificador([f1, , ...rest]) {
    // as duas virgulas faz com que seja desconsiderado o prox item(só funciona com array)
    console.log(f1, ...rest);
}

liquidificador(["limão", "laranja", "abacaxi", "kiui", "uvas"]);

//=================================================================//

function exibeArray([nome1, nome2,,,...rest]) {
    console.log(nome1, nome2,...rest);
}

exibeArray([
    "Etivaldo",
    "Carlos",
    "Karine",
    "Dudu",
    "Pedrinho",
    "Carol",
    "José",
]);


//======================================================//

function imprimeNomes(nomes){
    for(let nome of nomes){
        if(nome === 'Karine'){
            continue
        }
        console.log(nome)
    }
}


imprimeNomes([
    "Etivaldo",
    "Carlos",
    "Karine",
    "Dudu",
    "Pedrinho",
    "Carol",
    "José",
]);

/*

 Entenda a lógica


- for (let nome of nomes): percorre cada elemento do array(nomes), um por vez e salva na variável nome.
- if (nome === "Karine"): verifica se o nome atual é "Karine".
- continue: interrompe a iteração atual e passa para o próximo nome.
- console.log(nome): exibe o nome somente se ele não tiver sido ignorado.

Atenção: o continue não encerra o loop inteiro. Ele apenas pula a execução restante daquela iteração.



Existem duas coisas diferentes aqui: nome e nomes.
1. O que é nomes?
É o array que contém todos os nomes que você passou para a função.
Por exemplo:
function exibeArray(nomes) {
    // código
}

exibeArray(["Etivaldo", "Carlos", "Karine", "Dudu"]);


Quando você chama exibeArray(...), o JavaScript recebe o array e o guarda no parâmetro nomes.
Imagine assim:
Array armazenado em nomes
Etivaldo

Carlos

Karine

Dudu



2. O que é nome?

É uma variável que recebe um elemento do array por vez durante a execução do loop.
Veja o código completo:

function exibeArray(nomes) {
    for (let nome of nomes) {
        console.log(nome);
    }
}

exibeArray(["Etivaldo", "Carlos", "Karine", "Dudu"]);


O loop funciona assim:

1

Primeira repetição
nome recebe "Etivaldo"
Console: Etivaldo



2

Segunda repetição
nome recebe "Carlos"
Console: Carlos



3

Terceira repetição
nome recebe "Karine"
Console: Karine



4

Quarta repetição
nome recebe "Dudu"
Console: Dudu



3. Por que os nomes das variáveis são diferentes?

- nomes: representa a coleção inteira, ou seja, o array.

- nome: representa apenas um elemento dessa coleção em cada repetição.

Você poderia até escrever assim:
for (let jogador of nomes) {
    console.log(jogador);
}


Funcionaria exatamente da mesma forma! jogador é apenas o nome que você escolheu para a variável que irá armazenar cada item do array ao percorrer o loop.
*/




// =========================================

function carros([ca1, ...rest]) {
    console.log(ca1, rest);

    console.log(...rest);
}

carros("byd");

carros("song");
