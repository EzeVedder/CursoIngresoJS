//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 5-Switch");
	var mesDelAño;

	mesDeLAño = prompt("Elija un mes del año");

	switch(mesDeLAño)
{
	case "enero":
	case "febrero":
	case "Enero":
	case "Febrero":
	alert("Veranito");
	break;
	default:
	alert("Extraño enero y febrero!!!");
}
}
