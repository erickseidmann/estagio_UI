/* 
Tipo de Dados

No JavaScript temos diversos tipos de dados,
 os mais comuns e ultilizados são:
 number , string , boolean, null  undefined, object;
 podemos verificar o tipo de dado com o operador typeof;

ARRAYS
Na verdade os Arrays são considerados objetos em JavaScript
porem servem como listas;
podemos ter itens de quaalquer tipo de dado tambem;
porem não por chave e valor, e sim por indice;
o primeiro indice é sempre 0 
para criar um array devo usar []


*/

var arr = [5, "Matheus", true,{teste:1, teste:2}];

console.log(arr);

var arr2 = [2,3,4,5,6];

console.log(arr2);

console.log(arr[1]);
console.log(arr2[0]);

arr[4] = 10;

console.log(arr);






