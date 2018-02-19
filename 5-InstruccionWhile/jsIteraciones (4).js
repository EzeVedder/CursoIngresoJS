function Mostrar()
{
	//var numero = prompt("ingrese un número entre 0 y 10.");
var num;

num = prompt("Elija un número del 0 al 9 inclusive");
while(num<0 || num>9)
{
num = prompt("Elija un número del 0 al 9 inclusive");
}
document.getElementById("Numero").value = num;
}//FIN DE LA FUNCIÓN