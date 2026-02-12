/*
    Destrinchando Simbolos:



=>  1️⃣ ^ → Começo da string

O ^ significa:

"Comece a verificar exatamente do primeiro caractere."

Sem ele, o regex pode encontrar o padrão em qualquer lugar da string.

🔍 Exemplo sem ^:

/[A-Za-z]+/.test("123abc456")

resultado: true pq ele vai aceitar letras em qualquer lugar



🔍 Exemplo com ^:

/^[A-Za-z]+/.test("123abc456")


Resultado:

false
Porque agora ele exige que comece com letra.


//======================================================================//


2️⃣ [A-Za-z] → Conjunto de caracteres permitidos

Os colchetes [] significam:

"Pode ser QUALQUER caractere que esteja aqui dentro."

Dentro deles:

A-Z → letras maiúsculas

a-z → letras minúsculas

Então:

[A-Za-z]


Significa:
👉 "Uma letra maiúscula OU minúscula"

Exemplos:
/[A-Za-z]/.test("A") // true
/[A-Za-z]/.test("z") // true
/[A-Za-z]/.test("1") // false


//====================================================//


3️⃣ + → Quantidade (Repetição)

O + significa:

"Repita o que vem antes UMA ou mais vezes."

Então:

[A-Za-z]+


Significa:
👉 "Uma ou mais letras seguidas"

Exemplos:
/^[A-Za-z]+$/.test("a")     // true
/^[A-Za-z]+$/.test("abc")   // true
/^[A-Za-z]+$/.test("")      // false (porque precisa de pelo menos 1)


//==========================================================================//

4️⃣ $ → Final da string

O $ significa:

"A string deve terminar aqui."

Sem ele, pode ter coisa depois.

🔍 Sem $:

/^[A-Za-z]+/.test("teste123")


Resultado:

true


Porque começa com letras — e o resto ele ignora.

🔍 Com $:
/^[A-Za-z]+$/.test("teste123")


Resultado:

false


Porque agora ele exige:

Começar com letra

Ter apenas letras

Terminar ali


//==================================================================//


🧠 Agora juntando tudo:
/^[A-Za-z]+$/


O regex está dizendo:

^ → Comece do início

[A-Za-z] → Só letras

+ → Pelo menos uma

$ → E termine aqui (não pode ter mais nada)

Tradução humana:

"A string deve conter somente letras, do começo ao fim."


//===================================================//


🎯 Comparação visual

       Regex	            O que permite

      [A-Za-z]+	        Letras em qualquer lugar +(pelo menos uma)

     ^[A-Za-z]+	            Começa com letras

     [A-Za-z]+$	            Termina com letras

    ^[A-Za-z]+$	        Só letras do começo ao fim

*/ 


