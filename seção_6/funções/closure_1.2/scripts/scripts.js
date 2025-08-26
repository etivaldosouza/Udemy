function funcaoExterna(){
    alert("Função Externa")

    function funcaoInterna(){
        alert("\n\nFunção Interna")
    }
    funcaoInterna()
}

/* 

Neste exemplo, estamos chamando a função interna dentro da função externa e os dois alertas serão mostrados ao usuário

*/ 