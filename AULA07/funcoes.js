function calcularMedia(nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  return media;
}

console.log(calcularMedia(6, 9));
//(calcularMedia(6,9))
console.log(`----------------------`);
function calcularMedia(nota1 = 0, nota2 = 0) {
  let media = (nota1 + nota2) / 2;
  return media;
}

let nota = calcularMedia(9, 3);
console.log(nota + 1);
console.log(`----------------------`);

