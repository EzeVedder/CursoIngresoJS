/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
  var numeroSecreto;

  function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.floor(Math.random()*(101-1)+1);
    //alert(numeroSecreto );
  alert(numeroSecreto);
  contadorIntentos = 0;
  document.getElementById("intentos").value = contadorIntentos;
}

  function verificar()
{
  var numeroElegido;
  var sePasa;
  var leFalta;

  contadorIntentos = contadorIntentos +1;
  document.getElementById("intentos").value = contadorIntentos;
  if(contadorIntentos < 10)
{
  numeroElegido = document.getElementById("numero").value;
	var leFalta = numeroSecreto - numeroElegido;
	var sePasa = numeroElegido - numeroSecreto;

  if(numeroSecreto == numeroElegido)
{
  alert("Usted es un ganador!!! y en solo "+" intentos");
}
  else if(numeroSecreto > numeroElegido)
{
  alert("Falta "+leFalta);
}
  else if(numeroSecreto < numeroElegido)
{
  alert("Se pasó "+ sePasa);
}
}
  else
  alert("Se acabaron los intentos");
  numeroSecreto = "";
}


