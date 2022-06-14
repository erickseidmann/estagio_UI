/* 
Tipo de Dados

No JavaScript temos diversos tipos de dados,
 os mais comuns e ultilizados são:
 number , string , boolean, null  undefined, object;
 podemos verificar o tipo de dado com o operador typeof;

OBJETOS 
funcionam como um array associativo de outras linguagens;
podemos criar propriedades comchave e valor;
a ideia é guardar um conjunto de valores para ultilizar 
posteriormente;
itens do objetos são chamados de prorpiedades
*/

var obj = {
    nome: "Matheus",
    idade: 29,
    profissao: "programador",
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome);

obj.nome = "pedro";

console.log(obj.nome);

console.log(obj);

// criar objeto

obj.graduacao = true;

console.log(obj);



