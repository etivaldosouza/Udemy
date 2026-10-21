/*
    Contador de Letras

=> Crie uma classe que conte quantas letras existem em uma frase, ignorando espaços

=> espaços não contam

=> acentos contam como letras normais

=> números e simbolos não contam.

*/ 


class LetterCounter{
    constructor(){

    }
    countLetter(str){
        
    let textoTratado = str.replace(/[^a-zà-ú]/gi,'')

    return textoTratado.length
}

}

   

let counter = new LetterCounter()

console.log(counter.countLetter('olá234mundo! 12345'))



/*
    .replace(/[^a-zà-ú]/gi, '')

    Essa linha significa:

=> “remova tudo que NÃO for letra”


O que é / ... /

Em JavaScript, tudo entre barras é uma expressão regular (regex).

/alguma-coisa/


O papel do ^ (acento circunflexo)
[^ ... ]


Dentro de colchetes [], o ^ inverte o sentido.

[abc] → aceita a ou b ou c

[^abc] → aceita tudo EXCETO a, b ou c

👉 Ou seja: negação


[a-z] → letras minúsculas
[a-z]


Representa todas as letras de a até z.


à-ú → letras acentuadas
[a-zà-ú]


Inclui letras como:

á à â ã é ê í ó ô õ ú ç


Isso é importante para português 🇧🇷.





Juntando tudo dentro dos colchetes
[^a-zà-ú]


Significa:

❌ qualquer caractere que NÃO seja
✔️ letra de a a z
✔️ letra acentuada de à a ú

Ou seja, isso pega:

espaços

números

pontuação (! , . ?)

símbolos (@ # $)


O g (global)
/g


Sem ele, o replace removeria só o primeiro caractere encontrado.

Com g:
👉 remove todos.


O i (ignore case)
/i


Faz o regex ignorar diferença entre:

maiúsculas

minúsculas

Então:

A e a são tratados igual


Tradução humana da linha inteira
.replace(/[^a-zà-ú]/gi, '')


📌 “Remova todos os caracteres que não sejam letras (inclusive acentuadas), ignorando maiúsculas e minúsculas.”

*/ 





let texto = 'Olá mundo!!! 123'

let resultado = texto.replace(/[^a-zà-ú]/gi, '')

console.log(resultado)