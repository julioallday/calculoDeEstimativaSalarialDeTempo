let salario = parseFloat( window.prompt("Qual o seu salário?"));
let meta = parseFloat(window.prompt("Qual é o valor de sua meta salarial?"));
let porcentagem = (parseInt(window.prompt(`Digite a porcentagem de reajuste, ex: 10 para 10%`)) / 100);
let mesReajuste = parseFloat( window.prompt(`Reajuste ocorre num intervalo de quantos meses?`));

let meses = 0;
let salarioAtual = salario;

while (salarioAtual < meta) {
  meses++;
  if (meses % mesReajuste === 0) salarioAtual += salarioAtual * porcentagem;
}
window.alert(`Voce precisará trabalhar por ${meses} meses para receber R$${parseFloat(meta)}.`);
