function Mostrar()
{
    var clave = prompt("ingrese el número clave.");
    while(clave != "utn750" && clave != null)
    {
    clave = prompt("Error, ingrese su clave");
    }
    if(clave=="utn750")
    {
        alert("Bienvenido");
    }
}//FIN DE LA FUNCIÓN


//OTRA MANERA DE HACERLO
// var clave = prompt("ingrese el número clave.");
//    while(clave != "utn750" && clave != null)
//  {
//    if(clave==null)
//    {break;}
//  clave = prompt("Error, ingrese su clave");
//   }
//  if(clave=="utn750")
//    {
//        alert("Bienvenido");
//    }