//Escriba un programa que pida un número y nos diga si es divisible por 2,3,5 o 7
//(solo hay que comprobar si lo es por 1 de los 4)

let num1 = parseInt(prompt("Ingrese un numero: "));

if (num1 % 2 == 0 ){
    document.write("El número ingresado es divisible por 2");
}else if(num1 % 3 == 0){
    document.write("El número ingresado es divisible por 3");
}else if(num1 % 5 == 0){
    document.write("El número ingresado es divisible por 5");
}else if(num1 % 7 == 0){
    document.write("El número ingresado es divisible por 7");
}else{
    document.write("El número ingresa no es divisible por 2,3,5,o,7");
}