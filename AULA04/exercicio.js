window.alert(`bem vindo!`);

let nome = prompt(`qual seu nome?`);
let nota1 = parseFloat(prompt(`qual sua primeira nota:`));
let nota2 = Number(prompt(`qual sua segunda nota:`));
let faltas = parseInt(prompt(`quantas faltas voce tem:`));

let media = (nota1 + nota2) / 2;

if (media >= 7 && faltas < 6) {
  alert(`aluno aprovado. \nmedia: ${media} \nfaltas: ${faltas}`);
} else {
  alert(`aluno reprovado. \nmedia: ${media} \nfaltas: ${faltas}`);
}
