//escriba un programa que pida 3 numeros y diga cual es el mayor de los 3.

let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));

if(num1 > num2 && num1 > num3){
    document.write("El primer número es el mayor: " + num1);
}else if(num1 == num2 && num1 > num3){
    document.write("El primer y segundo número son los mayores: " + num1); 
}else if(num1 > num2 && num1 == num3){
    document.write("El primer y tercer número son los mayores: " + num1);
}else if(num2 > num1 && num2 > num3){
    document.write("El segundo número es el mayor: " + num2);
}else if(num2 > num1 && num2 == num3){
    document.write("El segundo y tercer número son los mayores: " + num2);
}else if(num3 > num1 && num3 > num2){
    document.write("El tercer número es el mayor: " + num3);
}else if(num3 == num2 && num1 < num3){
    document.write("El tercer y segundo número son los mayores: " + num3); 
}else{
    document.write("Los 3 números son iguales :D ");
}
