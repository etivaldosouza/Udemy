// 1ºPasso: 
const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const button = document.querySelectorAll('#buttons-container button')


//3ºPasso
class calculator {
    constructor(previousOperationText,currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText  = currentOperationText
    }

}

//2ºPasso:

button.forEach((btn) => {   
    btn.addEventListener('click',function(e){
        const value = e.target.innerText

        if(+value >= 0 || value === '.' ){  /*o sinal de + converte o conteúdo de value para um número, quando possível.*/
        console.log(value)
        }else{
            console.log('Operação:', value)
        }       
    
    })   
})




/*

btn: é uma variável que representa o botão individual que está sendo processado naquela repetição.


2. Primeira linha: button.forEach((btn) => {
button.forEach((btn) => {


Lembra desta linha que você escreveu anteriormente no seu código?
const button = document.querySelectorAll('#buttons-container button')


Ela seleciona todos os elementos <button> que estão dentro da div buttons-container do seu HTML.

No seu caso, são 19 botões: os números, os operadores e os botões de controle.

O resultado de querySelectorAll() é uma lista de elementos chamada NodeList.

O método .forEach() percorre essa lista, elemento por elemento.

Vamos entender os dois termos:

- button: é a lista que contém todos os botões encontrados no HTML.
- btn: é uma variável que representa o botão individual que está sendo processado naquela repetição.
Imagine que o JavaScript faça o seguinte:

CE

Primeira repetição

btn representa o botão CE. (btn = CE)

C

Segunda repetição

btn representa o botão C (btn = C).


DEL

Terceira repetição

btn representa o botão DEL.


O processo continua até percorrer todos os 19 botões.

Observe que btn é apenas um nome que você escolheu para a variável. Poderia ser botao no lugar de btn, por exemplo:
button.forEach((botao) => {
    // Aqui, botao representa cada botão individual.
})


O resultado seria o mesmo.
3. Segunda linha: btn.addEventListener('click', (e) => {
btn.addEventListener('click', (e) => {

Essa linha adiciona um evento de clique ao botão que está sendo percorrido naquele momento.

Vamos separar:
- btn: o botão individual.
- addEventListener(): método que permite escutar um evento.
- 'click': o tipo de evento que queremos detectar.
- (e) => { ... }: função que será executada quando o clique acontecer. O parâmetro e recebe informações sobre o evento.
Por exemplo, quando o forEach() estiver processando o botão 7, essa instrução será equivalente a:
botao7.addEventListener('click', (e) => {
    // Executa quando o usuário clicar no botão 7.
})


Depois, quando estiver processando o botão 8, será equivalente a:
botao8.addEventListener('click', (e) => {
    // Executa quando o usuário clicar no botão 8.
})


A grande vantagem: você não precisa escrever um evento separado para cada botão. O forEach() faz isso por você.

4. Terceira linha: const value = e.target.innerText
const value = e.target.innerText


Aqui está uma das partes mais importantes!

Essa linha captura o texto do elemento que recebeu o clique e armazena esse texto na variável value.

Vamos entender cada parte:

Código	Significado
e	Objeto com informações sobre o evento.
e.target	Elemento HTML que recebeu o clique.
.innerText	Texto que está dentro desse elemento.
const value	Cria uma variável para guardar o texto capturado.
Imagine que você clicou no botão 7 do seu HTML:
<button class="number">7</button>


O JavaScript executa:
const value = e.target.innerText


O valor de value será a string "7".

Se você clicar no botão de adição:
<button>+</button>


O valor de value será a string "+".

Vamos testar mentalmente:
Experimente clicar nos botões abaixo:
789+- =DEL

Resultado de e.target.innerText:
7
Tipo do valor: string (texto), não número.

Esse exemplo interativo ilustra o resultado da captura do texto. No seu código real, quem faz essa captura é o evento de clique do navegador.

Uma observação importante: e.target representa o elemento exato que recebeu o clique. Como seus botões contêm somente texto, ele corresponde ao próprio botão. Se houvesse um ícone ou outro elemento dentro do botão, o target poderia ser esse elemento interno.

5. Quarta linha: console.log(value)
console.log(value)


Essa linha imprime o conteúdo de value no console do navegador.

Se você clicar nos botões 1, 2 e +, por exemplo, verá:

1
2
+

*/