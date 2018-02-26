/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo;
 var estadoCivil;
 var sueldo;
 var legajo;
 var nacionalidad;
 var validarEdad=true;
 var validarSexo=true;
 var validarEstadoCivil=true;
 var validarSueldoBruto=true;
 var validarLegajo=true;
 var validarNacionalidad=true;

while(validarEdad==true)
{
    edad=prompt("Ingrese su edad");     
    if(edad<18 || edad>90)
    {
        alert("No cumple con los años requeridos");
    }
    else if(isNaN(edad)){
        alert("Debe colocar una edad válida");}
    else 
    {
        validarEdad=false
    }   
}
while(validarSexo==true)
    {
        sexo=prompt("Ingrese su sexo f - m");
        if(sexo!="f" && sexo!="m")
        {
            alert("Ingrese un sexo válido");
        }
        else
        validarSexo=false  
    }
    switch(sexo)
    {
        case "f":
        sexo = "Femenino";
        break;
        default:
        sexo = "Masculino";
    }
while(validarEstadoCivil==true)
    {
        estadoCivil=prompt("Ingrese su estado civil: 1-soltero 2-casado 3-divorciado 4-viudo");
        if(estadoCivil<1 || estadoCivil>4)
        {
            alert("Ingrese un estado civil válido");
        }
        else
        validarEstadoCivil=false  
    }
        switch(estadoCivil)
        {
            case "1":
            estadoCivil = "Soltero";
            break;
            case "2":
            estadoCivil = "Casado";
            break;
            case "3":
            estadoCivil = "Divorciado";
            break;
            case "4":
            estadoCivil = "Viudo";
            break;
        }    
while(validarSueldoBruto==true)
    {
        sueldo=prompt("Ingrese sueldo bruto percibido");
        if(sueldo<8000)
        {
            alert("El sueldo bruto no puede ser menor a $8000");
        }
        else
        validarSueldoBruto=false  
    }
while(validarLegajo==true)
    {
        legajo=prompt("Ingrese su número de legajo");
        if(legajo<1000 || legajo>9999)
        {
            alert("El legajo no existe");
        }
        else
        validarLegajo=false  
    }
while(validarNacionalidad==true)
    {
        nacionalidad = prompt("Ingrese su nacionalidad A-Argentino E-Extranjero N-Nacionalizado");
       if(nacionalidad!= "A" && nacionalidad!= "E" && nacionalidad!= "N")
        {
            alert("Ingrese un dato válido");
        }
        else
        validarNacionalidad=false;
    }
        switch(nacionalidad)
        {
            case "A":
            nacionalidad = "Argentino";
            break;
            case "E":
            nacionalidad = "Extranjero";
            break;
            case "N":
            nacionalidad = "Nacionalizado";
            break;
        }
    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = estadoCivil;
    document.getElementById("Sueldo").value = sueldo;
    document.getElementById("Legajo").value = legajo;
    document.getElementById("Nacionalidad").value = nacionalidad;            
 }

