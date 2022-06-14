/* 
Tipo de Dados

No JavaScript temos diversos tipos de dados,
 os mais comuns e ultilizados são:
 number , string , boolean, null  undefined, object;
 podemos verificar o tipo de dado com o operador typeof;

STRING

String é o tipo de dado para textos;
as strings podem ser escritas com aspas simples e duplas;
Um numero entre aspas pode ser considerado uma string;
é possivel tambem concatenar strings com +;

 */

var nome = " Matheus "
var sobrenome ="Seidmann"

var nomeCompleto = nome + " " + sobrenome;

console.log(nome);
console.log(typeof nome);

console.log(typeof "asd");

console.log(nomeCompleto);

console.log(typeof "5.555");

var frase = "Esta pe uma frase complexa";

document.write(nome);
