// Ejercicio 3 
// 3- Números con condicionales
// Ingresan dos numeros
// Si el primero es mayor que el segundo mostrar en consola
// la suma de ambos
// Si el primero es menor que el segundo mostrar en consola
// la resta del segundo menos el primero.
// Si son iguales mostrar en consola la multiplicación de ambos.
// ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3

let num1 = parseFloat(prompt('ingrese un numero'))
let num2 = parseFloat(prompt('ingrese otro numero'))

if (isNaN(num1) || isNaN(num2)){
    
    console.error('Te olvidaste de ingresar un valor, por favor vuelve a intentarlo')
    
    }else{
        if (num1>num2){
                  console.log(`La suma de ambos es: ${num1 + num2}`);
          } else if(num1<num2){
              console.log(`La resta del segundo menos el primero es: ${num2 - num1}`)
          }else{
              console.log(`La multiplicacion de ambos es: ${num1*num2}`)}
          }

