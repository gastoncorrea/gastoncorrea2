let estacion = prompt("Ingrese la estación del año preferida");
switch(estacion){
    case "primavera" : 
        document.write("el usuario eligio primavera");
        break;
    case "otoño": 
        document.write("el usuario eligio otoño");
        break;
    case "verano": 
        document.write("el usuario eligio verano");
        break;
    case "invierno": 
        document.write("el usuario eligio invierno");
        break;
    default:
        document.write("El usuario eligio una opcion incorrecta");
        break;
}