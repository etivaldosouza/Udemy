/*
=>  Regex sozinha não é suficiente para validar datas 100% corretamente (por causa de fevereiro e ano bissexto).

=>  A forma profissional de fazer isso em JavaScript é:

1️⃣ Validar o formato com regex
2️⃣ Validar a data usando o objeto Date

*/ 

// 2/11/1983 false => !false === true

function validarData(data){
    // Valida o formato DD/MM/AAAA
    const formatoValido = /^(0[1-9]|12[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}/

    if(!formatoValido.test(data)){     // se a data for contraria ao padrão imposto ret
        return false
    }
    //Separa dia, mês e ano
    const[dia,mes,ano] = data.split('/').map(Number)

    //Cria a data no JS (mês começa do 0)

    const dataObj = new Date(ano, mes - 1, dia)

    //  Verifica se a data realmente existe

    return (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() === mes - 1 &&
    dataObj.getDate() === dia
  );
}


console.log(validarData('29/02/2024')) // true (bissexto)
console.log(validarData('29/02/2023')) // false
console.log(validarData('31/04/2024')) // false (abril só tem 30)
console.log(validarData('05/02/2000')) // true
console.log(validarData('5/2/2000'))  



/*
OBS:

quando se escreve:

[0-31]

Isso NÃO significa números de 0 até 31.

Em regex, colchetes [] significam conjunto de caracteres, não número inteiro.

Ou seja:

[0-31]

significa:

aceita UM caractere que seja:

de 0 até 3

ou 1

Na prática isso vira:

0,1,2,3

O 1 está repetido e o -31 é interpretado como intervalo inválido.

Então:

[0-31]{2}

significa:

dois caracteres onde cada um pode ser 0,1,2 ou 3

Ou seja, aceita coisas como:

33
00
21

Mas não significa 01 até 31.

//================================================//

MANEIRA CORRETA:

Explicação do dia:

0[1-9]   → 01 até 09
[12][0-9] → 10 até 29
3[01]     → 30 ou 31


Explicação do mês:

0[1-9] → 01 até 09
1[0-2] → 10 até 12

*/ 



/*
🔎 2️⃣ O que significa o ! ?

O ! significa negação lógica.

Ele inverte o valor booleano.

Valor original	        Com !

    true	            false
    false	            true

Exemplo:

console.log(!true);  // false
console.log(!false); // true

🔎 3️⃣ Então o que isso faz?

if (!formatoValido.test(data))

Significa:

"Se a data NÃO passar no teste da regex..."

Ou seja:

Se o formato estiver errado

Se não for DD/MM/AAAA

Se tiver letras

Se faltar número


🔎 4️⃣ E o return false?
return false;

Significa:

Pare a função aqui e retorne falso imediatamente.

Isso é chamado de validação antecipada (early return).

🧠 Traduzindo para português simples

Esse trecho significa:

"Se a data digitada não estiver no formato correto, já retorna falso e nem continua a validação."

🔥 Exemplo prático

Se a pessoa digitar:

validarData("5/2/2000")

A regex falha.

Então acontece:

formatoValido.test(data) // false
!false // true

Então entra no if e retorna:

false

E a função termina ali.




*/ 