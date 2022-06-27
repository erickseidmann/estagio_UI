/*Operador logico || tambem é conhecido como or 
ele retorna true caso uma das operações retorne verdadeiro
o OR retirna false apenas se as duas expressões são falsas 


*/
var idade = 12;
var nome = "João";

if(nome == "João" || idade > 14) {
  console.log("Pode entrar na aula de esgrima");
} else {
  console.log("Não pode entrar");
}

if(nome == "Pedro" && (30 > 20 || 10 == 10)) {
  console.log("testando");
} else {
  console.log("não entrou");
}