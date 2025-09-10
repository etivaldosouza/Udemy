/*

    Estrutura de uma função

    => funções são chamadas durante o programa

    => voçê também pode ouvir: executar,chamar, invocar uma função.

    => chamamos uma função utilizando o nome dela + abrindo e fechando parenteses

                    nomeDafuncao ()

    => também podemos inserir parâmetros, em algumas funções são obrigatórios.

   

    parâmetro e argumento não são sinônimos. 
    
    ** Parâmetro: refere-se genericamente a um valor indefinido.
    
    ** argumento:  é o valor efetivo do parâmetro.

    ex:

    function(n1,n2){  n1,n2 são parâmetros
        soma n1 + n2
    }

*/  

    function somarDoisNumeros(n1,n2){  
        return n1 + n2
    }

    console.log(somarDoisNumeros(2,3)) // 2,3 são argumentos
