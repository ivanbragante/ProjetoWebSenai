/* Selecionamos o botão com id 'btnMensagem' e adicionamos um ouvinte de evento de clique.*/
document.getElementById("btnMensagem").addEventListener("click", function () {
  // Quando o botão for clicado, alteramos o conteúdo do parágrafo com id 'mensagem'.
  document.getElementById("mensagem").textContent = "Olá! Você clicou no botão.";
});

function somar() {

  // Pegamos os valores dos inputs como texto e convertemos para número
  let v1 = parseFloat(document.getElementById("valor1").value);
  let v2 = parseFloat(document.getElementById("valor2").value);

  /*
  Aqui fazemos uma verificação:
  - isNaN(v1): verifica se v1 não é um número (NaN = Not a Number).
  - ||: operador "OU". A condição será verdadeira se pelo menos um dos dois valores for inválido.
  - Se for verdadeiro, significa que o usuário digitou algo errado (como texto ou campo vazio).
  */

  if (isNaN(v1) || isNaN(v2)) {
    document.getElementById("resultado").textContent = "Por favor, digite dois números válidos.";
  } else {
    let resultado = v1 + v2; // Faz a soma
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
}
