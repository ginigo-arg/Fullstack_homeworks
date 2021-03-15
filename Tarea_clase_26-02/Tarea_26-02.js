
let valor1=parseFloat(prompt('Ingrese un valor por favor'))
let valor2=parseFloat(prompt('Ingrese un valor por favor'))
let operacion=parseFloat(prompt('¿Que opción de operacion desea realizar? 1-Suma 2-Resta 3-Multiplicación 4-División'))



if (isNaN(valor1)){
    console.error('El 1° valor ingresado es erroneo, por lo tanto lo convertimos a 0 (cero)')
    valor1 = 0;
}
if (isNaN(valor2)){
    console.error('El 2° valor ingresado es erroneo, por lo tanto lo convertimos a 0 (cero)')
    valor2 = 0;
}

// if (operacion===1 || operacion===2 || operacion===3 || operacion===4)
// {
    switch (operacion) {
        case 1:
            let suma= valor1 + valor2;
            console.log(`El resultado de la suma es: ${suma}`)
            break;
    
        case 2:
            let resta= valor1-valor2;
            console.log(`El resultado de la resta es: ${resta}`) 
            break;
        
        case 3:
            let Mult=valor1*valor2;
            console.log(`El resultado de la multiplicación es: ${Mult}`);
            break;
    
        case 4:
            if(valor2===0){
                console.error('El 2° valor ingresado es = 0, lo cual indetermina la operación división.')
                console.error('Resultado = IND')
            }else{
                
                let div= valor1/valor2;
                console.log(`El resultado de la división es: ${div}`)
            }
            break;
    
        default:
            console.error('Ingrese una opción (Number) valido para poder realizar la operación.');
            break;
    }
// }else{
//     console.error('Ingrese una opción (Number) valido para poder realizar la operación.');
    
// }

