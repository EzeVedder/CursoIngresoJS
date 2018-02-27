function Mostrar()
{
    var importe;
    var impConDescuento;

    importe = prompt("Indique el importe del producto");
    if(importe == "")
    {
        alert("Coloque el importe del producto, por favor");
    }
    else
    {
        //convierto a nro
        importe = parseInt(importe);
//calculo el descuento del 25%
        impConDescuento = importe*0.75;
        document.getElementById("importeFinal").value = impConDescuento;
    }    
}
