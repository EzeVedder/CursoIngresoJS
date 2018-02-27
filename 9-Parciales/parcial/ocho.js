function Mostrar()
{
    var nPositivo;
    var nPares=0;
    var promedio=0;
    var total=0;
    var cantNros=0;
    var nMax;
    var nMin;
    var primeraVez = true;
    var seguir = true;

    while(seguir == true)
    {
        nPositivo = prompt("Ingrese un número");
        nPositivo = parseInt(nPositivo);
        if(isNaN(nPositivo) || nPositivo < 0)
        {
            alert("Debe ingresar un número mayor o igual que 0");
        }
        else
        {
            nPositivo = parseInt(nPositivo);       
                if(primeraVez)
                {
                    nMax = nPositivo;
                    nMin = nPositivo;
                    primeraVez = false;
                }
                if(nPositivo %2 == 0)
                {
                    nPares++;
                }
                if(nPositivo > nMax)
                {
                    nMax = nPositivo;
                }
                if(nPositivo < nMin)
                {
                    nMin = nPositivo;
                }
                total = total + nPositivo;
                cantNros = cantNros + 1;
             
        }
        seguir = confirm("¿Desea continuar?");
    }
    promedio = total/cantNros;
    document.write("La suma total es: "+total+" El promedio es: "+promedio+" El número máximo ingresado es: "+nMax+" El número mínimo ingresado es: "+nMin+" La cantidad de números pares ingresados es: "+nPares);
}
