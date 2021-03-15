

let persona = {
    nombre: 'Gabriel Iñigo',
    Edad: '22',
    dni: 21745776,
    domicilio: 'Chacabuco 852 - Tafi Viejo',
    hijos: 'cero ¡gracias a dios!',
    profesion: 'Estudiante de Ing. Sistemas and Full Stack',

    listar:function(){
        for (let propiedad in persona){
            console.log(`${propiedad}: ${persona[propiedad]}`);
        }
    },

    saludar:function(){
        console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.Edad} y soy un ${this.profesion} `);
    }

}


let peliculas = [
    {titulo: 'Iron Man 3 el hombre de hierro', genero:'accion', annio:2008, sinopsis:'ironman lucha con un enemigo sin limites'},
    {titulo: 'madagascar 3 "los fugitivos"', genero:'accion, comedia', annio:2012, sinopsis:'escape de la isla luego del casamiento'},
    {titulo: 'La era de hielo, el origen de los dinosaurios', genero:'accion, drama', annio:2009, sinopsis:'invasion de dinosaurios'},    

]

function listarPeliculas(){
    peliculas.forEach(function(pelicula){
        console.log(`Titulo:${pelicula.titulo} - Genero: "${pelicula.genero}" - Año:"${pelicula.annio}" - Sinopsis:"${pelicula.sinopsis}"`)
    })
}

    