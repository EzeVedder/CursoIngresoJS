
function Mostrar()
{
    var base;
    var superficie;
//tomo el dato de la base de la caja
    base = document.getElementById("laBase").value;
    if(base == "")
    {
        alert("Debe colocar la medida de la base para obtener un resultado");
    }
    else
    {
//convierto a nro y calculo la superficie
        base = parseInt(base);
        superficie = base*base;
//muestro el resultado del calculo
        alert("La superficie del cuadrado es: "+superficie);
    }
}
