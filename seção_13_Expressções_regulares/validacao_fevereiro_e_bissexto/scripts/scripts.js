/*
=>  Regex sozinha não é suficiente para validar datas 100% corretamente (por causa de fevereiro e ano bissexto).

=>  A forma profissional de fazer isso em JavaScript é:

1️⃣ Validar o formato com regex
2️⃣ Validar a data usando o objeto Date

*/ 

function validarData(data){
    // Valida o formato DD/MM/AAAA
    const formatoValido = /^(0[1-9]|12[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}/
    if(!formatoValido.test(data)){
        return false
    }
    //Separa dia, mês e ano
    const[]
}