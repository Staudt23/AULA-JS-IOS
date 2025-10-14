let media,
  nome,
  falta,
  media_ios = 7;

nome = "emanuel";
media = 9;
falta = 5;
console.log(media > media_ios);
// > maior
console.log(media >= media_ios);
//>= maior ou igual
console.log(media < media_ios);
// < menor
console.log(media <= media_ios);
// <= menor ou igual
console.log(`================================`);
console.log(falta == 5);
//== igual
console.log(6 === 5);
//=== valores e tipos iguais
console.log(8 != 7);
// != diferente
console.log(`==================`);

console.log(typeof nome);
console.log(6 >= 10);

//finds no quintao | 500 valor minimo
let dinheiros = 300;
let sol = true;
let finds =
  dinheiros > 500 && sol == true ? "vou pra PRAIA!" : "nao vou PRA PRAIA!";

console.log(finds);

finds =
  dinheiros >= 500 || sol == true ? "vou pra PRAIA!" : "nao vou PRA PRAIA!";

console.log(finds);

console.log(`tem sol hoje? ${sol}`);
