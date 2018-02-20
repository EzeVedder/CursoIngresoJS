function Mostrar()
{
 
	//var respuesta='si';
	var contador=0;
	var acumulador=0;
	var num;
	var rta=true;
	//comienza a preguntar
	while(rta == true)
	{
		num = prompt("Ingrese un número");
		if(num == null)
		//si cancelo salgo del while
		{
			break;
		}
		else if(isNaN(num)==true)
		//valido que ingrese un número
		{
			alert("Entrada incorrecta, por favor ingrese un número válido");
			continue
		}
		num = parseInt(num);
		acumulador = acumulador + num;
		contador++
		rta = confirm("¿Desea seguir ingresando números?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN
  