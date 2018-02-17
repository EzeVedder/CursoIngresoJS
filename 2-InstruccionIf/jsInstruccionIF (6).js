function Mostrar()
{
//tomo la edad  
    var edad = document.getElementById("edad").value;
    if(edad >= 18)
{
    alert("La persona es mayor de edad")
}
    else
        if(edad < 13)
{    
        alert("La persona es un niño")
}	
        else
{
        alert("La persona es adolescente")
}  
}//FIN DE LA FUNCIÓN