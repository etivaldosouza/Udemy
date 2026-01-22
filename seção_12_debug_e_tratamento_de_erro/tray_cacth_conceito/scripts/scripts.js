/*
 try e catch

 => O bloco try catch, vai tentar executar um código(try), caso não consiga ele pode retornar o erro(atraves do catch) que esse código gerou.

 => catch significa pega. ele vai pegar o erro q aconteceu la no try e jogar dentro da variavel(parametro) do cacth
 => Muito util para debug

*/

// let a = 2
// let b = 1

try{
    let c = a + b
}catch(erro){
    alert(`Erro:${erro}`)
    //throw(`${erro}`)
}

alert("teste") // só para mostrar que o try catch ele não para o código.a não ser que a gente use o throw


//para resolver o erro eu crio as variveis a e b acima.