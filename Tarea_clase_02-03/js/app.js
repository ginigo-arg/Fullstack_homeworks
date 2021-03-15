
console.log('Bienvenido a Super Vea')

var respuesta = parseFloat(prompt('¿Que desea Hacer? 1-Cargar un producto | 2-Listar productos | 3-Buscar un producto en el carrito | 4-Filtrar productos | 5-Eliminar un producto | 6-Salir'));

let finCarga="";
let listaProductos = [];
var encontrarProducto = [];
while(respuesta !== 6){

    switch (respuesta) {
        case 1:
            carga();
            break;
    
        case 2:
            listar_Productos();
            break;
        
        case 3:
            findProduct(listaProductos);
            break;
            

            case 4:
                Filtrar();
                break;
            case 5:
                deleteProduct();
                break;
                
                default:
            }

    var respuesta = parseFloat(prompt('¿Que desea Hacer? 1-Cargar un producto | 2-Listar productos | 3-Buscar un producto en el carrito | 4-Filtrar productos | 5-Eliminar un producto | 6-Salir'));
}
console.log('GRACIAS POR CONFIAR EN NOSOTROS, ¡LO ESPERAMOS PRONTO!');

// // ================ Variables ===================
// // funcion cargar productor
function carga (){
    let Producto=prompt("INGRESE Nombre del producto a su carrito: (Cancelar para terminar) ");
    while (Producto) {
        listaProductos.push(Producto.trim().toUpperCase());
        Producto=prompt("Ingrese otro producto a su carrito: (Presione Cancelar para terminar) ");

        finCarga=Producto;
    
    }
    console.log('La carga de productos fue un exito')
}
// Funcion listar 

function listar_Productos(){
    console.log('Su lista de productos es la siguiente: ')
            for(let i=0; i < listaProductos.length; i++){
                console.log(`${i+1}_${listaProductos[i]}`)
            }
}

// funcion encontrar producto
function findProduct(listaProductos){
    var encontrarProducto = prompt('Ingrese el nombre del producto que quiere buscar.');

    if(encontrarProducto !== null){
            if (listaProductos.includes(encontrarProducto.trim().toUpperCase())===true){
                console.log('El producto se encuentra en tu Carrito')
            }else{ console.error('El Producto no se encuentra en tu carrito.')
        }
    }
}

// Funcion filtrat un producto (NO LA PUDE RESOLVER :())
function Filtrar () {

    console.error('No la pude resolver :(')
    }

// funcion eliminar un producto 
function deleteProduct(){
        let producto = prompt('Ingrese el producto que quiere quitar');
        var i = listaProductos.indexOf(producto.toUpperCase().trim());

        if(i !== -1){
            listaProductos.splice(i, 1);
            console.log('El producto se elimino de su carrito.');
            listar_Productos();
        }else{
            console.error('El producto no se encuentra en su carrito.');
            listar_Productos();
        }
    }