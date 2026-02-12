/*
    Ocorrência precisa

=> Inserir o número de ocorrência entre {}

*/

//================== Validado telefone ===========================================//

let telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("4004-1000"));

console.log(telefone.test("40041000"));

//=======================================================================//

let fone = /\(\d{2}\)\d{4,5}-?\d{4}/; // pode ou não ter o -

console.log(fone.test("9898198-6302"));
console.log(fone.test("98981986302"));
console.log(fone.test("(98)981986302"));
console.log(fone.test("(98)81986302"));

//================= Validando CEP ====================================//

let cep = /\d{5}-\d{3}/;

console.log(cep.test("65110-000"));

console.log(cep.test("65110000"));


console.log(cep.test("6511-000"));