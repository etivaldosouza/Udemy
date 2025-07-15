/*

 Operadores Lógicos

 -Por Meio de uma comparação resulta em um Boolean

 - &&(and) -> só é verdadeiro se os dois forem verdadeiros
 

 - || (ou) -> só é falso se os dois forem falsos
 
 - ! (not) -> inverter os valores ( true vira false e vice versa)
 
*/

console.log(true && true) // true
console.log(true && false) // false
console.log(false || false ) // false
console.log(!true) // false


console.log( 5 > 3 && 3 == 2) // false

console.log( 5 > 3 ||  3 == 1) // true

console.log( 3 == 3 && 'Matheus' == 'Matheus') // ( v and v = v)

console.log('Felipe' == 'João' || false) // (f && f = f)

console.log(!(true && true)) // (! (v and v = v -> !(v) = f))