/*
    lastIndexOf()

=> encontrar o último índice de um elemento.

=> Caso seja definido o parâmetro inicio, a busca do índice se faz da direita para esquerda a partir desse parâmetro. caso o elemento ñ exista, o retorno é -1

*/

const arr = [1,2,"a","b","2","c",1,"a","45"]

console.log(arr.lastIndexOf(1))

console.log(arr.lastIndexOf(1,0)) //procure o último índice de 1, mas só até o índice 0 (incluindo ele)

console.log(arr.lastIndexOf("a"))

console.log(arr.lastIndexOf("a",2)) // procure o último índice de a, mas só até o índice 2

console.log(arr.lastIndexOf(2,1)) //procure o último índice de 2, mas só até o índice 1



