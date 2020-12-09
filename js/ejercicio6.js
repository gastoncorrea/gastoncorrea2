// Ejercicio Nº 6: Escriba un programa que pida 2 num y escriba en la pantalla cual es el mayor

let num1 = parseInt(prompt("Ingrese el primer número: ","1,2,3,etc..."));
let num2 = parseInt(prompt("Ingrese el segundo número:","12,13,14,etc..."));

if(num1>num2){
    document.write("El número mayor es el que se ingresó primero: " + num1);
}else if(num2>num1){
    document.write("El número que se ingreso en segundo lugar es mayor: " + num2);
}else{
    document.write("Los números son iguales: " + num1 + " y " + num2);
}