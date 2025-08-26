/*

                        Clousures

=> O significado da palavra inglesa Closures é clausura, ambiente fechado, confinamento.

=> Em JavaScript, essa palavra é usada para confinar uma função(interna) dentro de outra
função(externa, ou seja, aninhar funções)

=> Funções aninhadas rodam dentro da função na qual estão aninhadas. Assim, uma função interna é visivel somente dentro da função externa e não será executada se for invocada fora dela.

*/ 

function funcaoExterna(){
    alert('Função Externa')
    
    function funcaoInterna(){
        alert('Função Interna')
    }
    // a interna é chamada aqui dentro
    funcaoInterna()
}



/*
    Explicação:

=> Quando você clica no botão, o navegador executa funcaoExterna().

=> Dentro dela, primeiro mostra o alerta da Função Externa.

=> Em seguida, chama funcaoInterna(), que mostra o alerta da Função Interna.

=> funcaoInterna não pode ser acessada de fora, só existe no escopo da funcaoExterna.



*/ 