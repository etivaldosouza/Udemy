function checaNumero(num) {
    
    let numero = Number(num)

    if (Number.isNaN(numero)) {
        alert('Por favor, digite apenas números')
        return null
    }

    return numero
}

let numeroValido = null

while (numeroValido === null) {
    let digitarNumero = prompt('Digite um número:')
    numeroValido = checaNumero(digitarNumero)
}

alert('Número válido digitado: ' + numeroValido)