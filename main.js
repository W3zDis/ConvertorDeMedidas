let GuardarValor = "";

function GuardarV2() {
  
  GuardarValor = document.getElementById('valor').value;
  
  document.getElementById('Result1').innerHTML = GuardarValor + " Metros pra centímetros: " + GuardarValor*100
  
  document.getElementById('Result2').innerHTML = GuardarValor + " Centimetros pra metros: " + GuardarValor/100
  
  document.getElementById('Result3').innerHTML = GuardarValor + " Milímetros pra Centímetros: " + GuardarValor/10

  document.getElementById('Result4').innerHTML = GuardarValor + " Quilômetros pra Metros: " + GuardarValor/1000
  
  
  console.log(GuardarValor)
}
