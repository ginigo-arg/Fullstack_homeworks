// Ejercicio 1 
// 1-Ingresar 3 números
// indicar cual es el mayor
// indicar cual es el menor
// obtener la raíz cuadrada del segundo número

let num1 = parseFloat(prompt('Ingrese un numero'));
let num2 = parseFloat(prompt('Ingrese un numero'));
let num3 = parseFloat(prompt('Ingrese un numero'));

console.log(`El maximo numero de los 3 ingresados es: ${Math.max(num1, num2, num3)}`)

console.log(`El mínimo numero de los 3 ingresados es: ${Math.min(num1, num2, num3)}`)

console.log(`La raiz cuadrada del segundo num. es: ${Math.sqrt(num2)}`)