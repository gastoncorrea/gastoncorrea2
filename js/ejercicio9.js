//Escriba un programa que pida una frase y escriba las vocales que aparecen

let cadena1 = prompt("Escriba una frase para poder analizarla: ");
let contador = 0;

document.write("<br> La frase tiene " + cadena1.length + " caracteres <br>");
document.write("Vocales encontradas: ");

for(let i = 0; i < cadena1.length; i++){
    if(cadena1.charAt(i).toLowerCase() == "a" || cadena1.charAt(i).toLowerCase() == "e" || cadena1.charAt(i).toLowerCase() == "i"
    || cadena1.charAt(i).toLowerCase() == "o" || cadena1.charAt(i).toLowerCase() == "u"){

        document.write(cadena1.charAt(i));
        contador++;

    }else{
        document.write("");
    }
    
}
if(contador == 0){
    document.write("0")
}else{
    document.write("<br>El numero de vocales es: " + contador)
}
