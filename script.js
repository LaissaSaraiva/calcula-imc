function calculaImc() {
  var inputAltura = document.getElementById("altura").value;
  var altura = parseFloat(inputAltura);

  var inputPeso = document.getElementById("peso").value;
  var peso = parseFloat(inputPeso);

  var imc = peso / (altura * altura);
  var imcFixado = imc.toFixed(1);

  var resultadoIMC = document.getElementById("resultadoIMC");
  if (isNaN(imcFixado)) {
    var nan = "Por favor, preencha todos os campos acima!";

    resultadoIMC.innerHTML = nan;
  } else if (imcFixado <= 15.0) {
    resultadoIMC.innerHTML = "Por favor, insira informações válidas!";
  } else {
    resultadoIMC.innerHTML = `O seu IMC é ${imcFixado}.`;
  }
}
