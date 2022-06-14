/* 
Tipo de Dados

No JavaScript temos diversos tipos de dados,
 os mais comuns e ultilizados são:
 number , string , boolean, null  undefined, object;
 podemos verificar o tipo de dado com o operador typeof;

NUMBER
- é um dado para numeros
- possui tres valores simbolicos : +infinity, -infinity e NaN;
- não existi um tipo definido para inteiros, todo numero é um 
nmber;
- vamos fazer alguns testes!

 */

 var numero = 5;

 console.log(numero);
 console.log(typeof numero);

 var float = 5.32;

 console.log(float);
 console.log(typeof float);

 var textoComNumero = "523";

 console.log(textoComNumero);
 console.log(typeof textoComNumero);

 console.log(NaN);
 console.log(typeof NaN);
 console.log(typeof +Infinity);
 console.log(typeof -Infinity);