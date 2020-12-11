//Añadir al ejercicio anterior que nos diga por cual de los 4 es divisible

let num1 = parseInt(prompt("Ingrese un numero: "));

let divisor =[2,3,5,7];
let contador = 0;
document.write("<br>El número ingresado es divisible por: ");
for(let i = 0; i < 4; i++ ){
    if(num1 % divisor[i] == 0){
        document.write( divisor[i]+" ");
        contador++;
    }
}
if (contador == 0){
    document.write(" ningún número");
}