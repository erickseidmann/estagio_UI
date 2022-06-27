/*
Estrutura de repetição 

-- estas estruturas servem para repeti n vezes uma operação;
-- Por exemplo: repetir uma determinada logica em cada elemento de um array;
-- as estruturas  mais comuns são while e for;
-- obs: tomar cuidado com loop infinito;

Estrutura while
-- o while é a estrututa de repetição mais simple do JS
a ideia é que se repita algo até atingir tal condição;
while-> enquanto;

*/ 

var x = 0;

while(x <= 10) {

  console.log( x);

  // incremetador
  x++;

}

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while(y <= 3) {

  console.log(arr[y]);

  y++;

}

var palavra = "Matheus";
var i = 0;

while(i <= 6) {

  console.log(palavra[i]);

  i += 1;

}

