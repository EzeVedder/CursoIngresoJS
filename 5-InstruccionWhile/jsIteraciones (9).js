function Mostrar()
{
	var contador=0;
	// declarar variables
	var num;
	var respuesta=true;
	var numMax;
	var numMin;
	var primera = true;
	//mientras no cancelo
	while(respuesta==true)
	{	
		contador++;
		num = prompt("Ingrese algún número");
		num = parseInt(num);
		if(primera==true)
		{
			primera = false;
			numMax = num;
			numMin = num;
		}
		else if(contador >1 && num > numMax) 
		{
			num = numMax;      
		}    
	}
document.getElementById("maximo").value = numMax;
document.getElementById("minimo").value = numMin;
}//FIN DE LA FUNCIÓN