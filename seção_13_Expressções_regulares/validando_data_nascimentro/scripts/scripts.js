/*
    Na Prática: validando data de nascimento

=> Da seguinte forma, podemos validar uma data de nascimento:

*/ 

let validaNasc = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/

console.log(validaNasc.test('23/11/1983'))
console.log(validaNasc.test('23111983'))
console.log(validaNasc.test('2/1/1983'))
console.log(validaNasc.test(' / / '))
console.log(validaNasc.test('**/**/****'))

//=================================================//

// Validando dia e mes corretamente:


let valNasc = /^(0[1-9]|[12][0-9]|3[01])[0-9]\/(0[1-9]1[0-2])\/\d{4}$/

console.log(valNasc.test('25/12/2015'))

console.log(valNasc.test('25/12/15'))

console.log(valNasc.test('2/2/15'))

console.log(valNasc.test('30/02/1999'))

console.log(valNasc.test('99/99/9999'))

console.log(valNasc.test('31/02/2026'))



//====================================================================//


/*

    OBS:

Quando você escreve:

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

🔴 2️⃣ Outro erro: [1920-2026]{4}

Isso aqui também não significa "anos de 1920 até 2026".

[1920-2026]

Significa:

um caractere que pode ser:

1, 9, 2, 0, -, 2, 0, 2, 6

E ainda tem intervalo inválido ali.

Regex não entende números grandes dentro de [].

🔴 3️⃣ O problema da barra

Você escreveu:

[\]/

Isso está errado.

Para colocar / no regex você pode simplesmente usar:

\/



✅ Forma correta (simples)

Se você quer apenas validar formato:

DD/MM/AAAA

Use:

const validaData = /^\d{2}\/\d{2}\/\d{4}$/

console.log(validaData.test('05/02/2000')) // true
console.log(validaData.test('5/2/2000'))   // false

Aqui:

\d{2} → dois dígitos

\/ → barra

\d{4} → quatro dígitos

🟢 Se quiser validar dia e mês corretamente

Agora sim validando melhor:

const validaData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/

Explicação do dia:

0[1-9] → 01 até 09

[12][0-9] → 10 até 29

3[01] → 30 ou 31

Explicação do mês:

0[1-9] → 01 até 09
1[0-2] → 10 até 12

🔥 Resultado:

console.log(validaData.test('05/02/2000')) // true
console.log(validaData.test('5/2/2000'))   // false
console.log(validaData.test('31/13/2000')) // false
console.log(validaData.test('32/01/2000')) // false


🎯 Resumindo o erro

    Você escreveu	                        O regex entende como

       [0-31]	                             conjunto de caracteres

     [1920-2026]	                         conjunto de caracteres

        []	                               nunca representa número inteiro

Regex não entende intervalos numéricos grandes dentro de colchetes.

*/
