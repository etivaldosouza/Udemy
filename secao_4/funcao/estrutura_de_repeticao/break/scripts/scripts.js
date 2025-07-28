/*
                break

=> força a saída de um loop 

=> as vezes precisamos parar o loop antes que ele complete todo o seu ciclo
    
*/ 

for(let i = 5; i < 20; i = i + 1){
    console.log(`${i}`)
    if( i % 10 == 0){
        console.log(`saiu do loop`)
        break
    }
    console.log('prosseguindo o loop')
}






let nome = 'Etivaldo'

for(let i = 0; i < 10; i = i + 1){

    if(i == 3){
        nome = 'João'
    }

    if(i == 5 && nome == 'João'){
        console.log('o nome é João, pode parar')
        break
    }
    console.log(`${i} - ${nome}`)
}

/*
    Resultado final explicado passo a passo:

    i = 0 → nome = 'Etivaldo' → imprime: 0 - Etivaldo

    i = 1 → nome = 'Etivaldo' → imprime: 1 - Etivaldo

    i = 2 → nome = 'Etivaldo' → imprime: 2 - Etivaldo

    i = 3 → entra no if, muda nome = 'João' → imprime: 3 - João * no js vc tem como alterar uma variavel no decorrer do codigo

    i = 4 → nome ainda é 'João' → imprime: 4 - João

    i = 5 → nome é 'João', entra no segundo if:

    imprime: o nome é João, pode parar

    para o laço com break






*/ 