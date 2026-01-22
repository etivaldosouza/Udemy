/*
try{

}catch 

é um método de tratameto de erro que mostra ao usuário o erro(problema) que está acontecendo no código. vale salientar que tal objetivo é voltado mais para o programador.

*/
/*

try {
    aalert('Teste');
} catch(erro) {
    alert("Erro:" + erro);
}


*/

/*

try => tentar. ou seja vou tentar executar o:  aalert('Teste') e caso acontece algum erro:

catch => tratar

*/ 



// quando quero personalizar um erro:

var x = 5
try {
    if(x < 10){
        throw 'O valor de X precisa ser maior que 10'
    }
}catch(erro){
    alert('Erro:' + erro )
}