function Mostrar()
{
    var precio1;
    var precio2;
    var precio3;
    var total;
    var promedio;

    precio1 = document.getElementById("precioUno").value;
    precio2 = document.getElementById("precioDos").value;
    precio3 = document.getElementById("precioTres").value;
//si no completa todos los valores salgo de la funcion
    if(precio1 =="" || precio2 == "" || precio3=="")
    {
        alert("No puede haber datos vacíos");
    }
    else
//convierto los precios a nros
    {
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
//hago las operaciones
    total = precio1 + precio2 + precio3;
    promedio = Math.round(total/3)
    alert("El total es: "+total+" y el promedio: "+promedio);
    }
//limpio los cajas
    document.getElementById("precioUno").value ="";
    document.getElementById("precioDos").value ="";
    document.getElementById("precioTres").value = "";

}
