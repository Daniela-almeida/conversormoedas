// conversor
alert("Olá, bem vindo (a) ao conversor de moedas");
var nome = prompt("qual o seu nome?");

var valorEmDolar = prompt("Coloque o valor em dólar: ");
valorCotacao = 4.94;
valorConvertido = (valorEmDolar * valorCotacao).toFixed(2);
alert(nome + " o valor em dólar é: " + valorConvertido);

var continuar = prompt("Quer continuar convertendo?" + " sim/nao");

if (continuar === "sim") {
  var novoValorEmDolar = prompt("Coloque outro valor");
  var novaConversao = (novoValorEmDolar * valorCotacao).toFixed(2);
  alert(nome + " o novo valor convertido em dólar é: " + novaConversao);
} else {
  alert("Conversão Encerrada");
}
