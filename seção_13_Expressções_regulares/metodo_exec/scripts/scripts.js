/*
    Método Exec

=> O metodo exec nos retorna um objeto com algumas informações sobre a regex

=> se nada for encontrado, retorna null


📌 O que é o método exec()?

O método exec() pertence ao objeto RegExp.

Ele executa uma busca em uma string e retorna:

👉 Um array com as informações da correspondência, se encontrar

👉 null, se não encontrar nada

📌 Sintaxe:
regex.exec(string)

🔎 Diferença entre exec() e test()

Você já deve ter visto:

regex.test(string)


✔ test() → retorna apenas true ou false

✔ exec() → retorna informações detalhadas da correspondência

*/ 

let exemplo = /\d+/.exec('o numero 100')

console.log(exemplo)

console.log(exemplo.index)

//=================================================//

let digitos = /\d+/

console.log(digitos.exec('tem o 100 aqui'))

console.log(digitos.exec('ñ tem aqui'))