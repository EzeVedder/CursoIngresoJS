function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var num;
	while(contador<5)
	{
		contador ++;
		num = prompt("Elija un número");
		num = parseInt(num);
		acumulador += num;
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
}//FIN DE LA FUNCIÓN