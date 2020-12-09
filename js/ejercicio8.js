//Escriba un programa que pida un numero y diga si es divisible por 2

let num1 = parseInt(prompt("Ingrese un número: "));
let resultado = num1 % 2;

if (resultado == 0){
    document.write("El Número que ingresó es divisible en 2.")
}else{
    document.write("El Número no es divisible por 2");
}
