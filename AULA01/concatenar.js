let nome = "staudt";
let Nome = "vitolas";
let curso = "dev. web";
let idade = 63;

console.log("eu sou o " + nome + " e estou cursando " + curso);

console.log(
  `eu sou o ${nome} e estou cursando ${curso} e tenho ${idade} de idade`
);

// let nomeAluno = Camel Case
// let nome_aluno = Snake Case
// let nome-aluno = Kebab Case
// let NomeAluno = Pascal Case

let A, B, C;

A = "gojo";
B = "sukuna";
C = A;

console.log(`var: A = ${A}`);
console.log(`var: B = ${B}`);
console.log(`==================`);

C = A
A = B
B = C

console.log(`==================`);
console.log(`var: A = ${A}`);
console.log(`var: B = ${B}`);
