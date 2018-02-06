//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var importeFinal
	var	iva

	importe=prompt("");
	importe=parseInt(importe);
	iva=importe*0.21;
	importeFinal=importe+iva
	document.getElementById("importe").value=importeFinal;	
}

