let num1 = parseInt(prompt("Ingrese primer número"));
let num2 = parseInt(prompt("Ingrese segundo número"));

/*si se cumple (condicion logica){
    entonces aqui va el codigo de la condicion
}
*/

if (num1 > num2){
    document.write("El num 1 es mayor al numero 2: " + num1);
}
else if(num1 == num2){
        document.write("Los numeros son iguales: " + num2);    
    }else{
        document.write("El num 2 es mayor al num 1: " + num2);
    }
    
