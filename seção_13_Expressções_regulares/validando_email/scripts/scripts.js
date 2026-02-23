/*
    Validando e-mail

=> da seguinte forma, podemos validar um e-mail:
*/ 


let validarEmail = /\w+@\w+(\.com.br|\.com)$/

console.log(validarEmail.test('etivaldosouza@hotmail.com'))
console.log(validarEmail.test('etivaldosouza@hotmail.com.br'))
console.log(validarEmail.test('123@hotmail.com.br'))
console.log(validarEmail.test('123_kf@hotmail.com.br'))
console.log(validarEmail.test('123_kf@hotmail'))
console.log(validarEmail.test('hotmail.com'))


/*
    OBS:

\w+.com.br

=> . se deixar sem a barra invertida significa que vai aceitar qualquer caractere

iria aceitar:

xcom
!com
@com

(\.com\.br|\.com) → termina com:

.com.br OU

.com

$ → fim da string



*/ 

von