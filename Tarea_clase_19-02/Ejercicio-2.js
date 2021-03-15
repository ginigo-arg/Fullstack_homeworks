// Ejercicio 2
// 2-Replicar la imagen decisiones gato usando los condicionales
// usar prompt para recibir los valores
// devolver el resultado por consola
// realizar controles de seguridad para que se acepte solo respuestas si o no

let respuesta = prompt("¿Es eso para mi? (SI | NO)")
if(respuesta !== null){   
if((respuesta.toUpperCase().trim())!=='SI' && (respuesta.toUpperCase().trim())!== 'NO'){
    console.error('La respuesta no es valida, refresque y vuelta a intentarlo');
} else if ((respuesta.toUpperCase())==='SI'){
    console.log('No lo quiero');
}else{
    console.log('Lo quiero');
}
}else {
    console.error('No respondiste bien, por favor vuelve a intentarlo')}
